import React, { RefObject, useRef, useState } from 'react'
import {
  IMargoNotebook,
  IMargoNotebookParentNode,
  IMargoNotebookNode,
} from '../../model/interfaces'
import { addEmptyParentNodeToNotebook } from '../../model/api/addParentNode'
import { toggleCellType } from '../../model/api/toggleCellType'
import { cloneNotebook } from '../../model/api/cloneNotebook'
import deleteNode from '../../model/api/deleteNode'
import createEmptyMargoNotebook from '../../model/api/createEmptyCellTree'
import createEmptyChildNode from '../../model/api/createEmptyChildNode'
import { moveNodeWithinTree } from '../../model/api/moveNode'
import { convertToJupyter } from '../../model/api/convertToJupyter'
import CellTree from '../CellTree'
import EditorControls from '../EditorControls'
import { addChildNodeToParent } from '../../model/api/addChildNode'
import styles from './Editor.module.css'
import NameEditor from './NameEditor'
import Spacer from '../common/Spacer'

/**
 * This is the  main component of the Margo editor app. Renders the
 * notebook-level controls and all of the cells that comprise the notebook.
 */
export default function Editor() {
  const [margoNotebook, updateMargoNotebook] = useState<IMargoNotebook>(
    createEmptyMargoNotebook()
  )
  const [notebookName, updateNotebookName] = useState<string>(
    'Untitled Notebook'
  )
  const notebookNameRef: RefObject<HTMLDivElement> = useRef(null)

  /**
   * Toggle a node's cell between markdown and code type cells
   * @param node
   */
  const handleToggleCellType = (node: IMargoNotebookNode) => {
    node.cell = toggleCellType(node.cell)
    updateMargoNotebook((oldTree) => cloneNotebook(oldTree))
  }

  /**
   * Add a new cell to the notebook
   */
  const addNewParentNode = () => {
    updateMargoNotebook((oldTree) =>
      addEmptyParentNodeToNotebook(cloneNotebook(oldTree))
    )
  }

  /**
   * Move a cell up one position within its level in the tree
   * @param node
   */
  const moveNodeUp = (node: IMargoNotebookNode) => {
    updateMargoNotebook((oldTree) => moveNodeWithinTree(oldTree, node, 'up'))
  }

  /**
   * Move cell down one position within its level in the three
   * @param node
   */
  const moveNodeDown = (node: IMargoNotebookNode) => {
    updateMargoNotebook((oldTree) => moveNodeWithinTree(oldTree, node, 'down'))
  }

  /**
   * Save the notebook as a .margo.ipynb file
   */
  const saveAsNotebook = () => {
    console.log(convertToJupyter(margoNotebook).toJSON())

    const storageObj = convertToJupyter(margoNotebook)

    var dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(storageObj))
    var dlAnchorElem = document.createElement('a')
    dlAnchorElem.setAttribute('href', dataStr)
    dlAnchorElem.setAttribute('download', `${notebookName}.ipynb`)
    dlAnchorElem.click()
  }

  /**
   * Add a child cell to a give parent node's cell
   * @param parentCellID
   */
  const addChildNode = (parentNode: IMargoNotebookParentNode) => {
    const newTree = cloneNotebook(margoNotebook)
    const childNode = createEmptyChildNode(
      parentNode as IMargoNotebookParentNode
    )

    addChildNodeToParent(parentNode as IMargoNotebookParentNode, childNode)

    updateMargoNotebook(newTree)
  }

  /**
   * Delete a cell from the tree by id
   * @param cellID
   */
  const deleteCell = (node: IMargoNotebookNode) => {
    updateMargoNotebook((oldTree) => deleteNode(cloneNotebook(oldTree), node))
  }

  /**
   * Reset the cell tree
   */
  const reset = () => {
    updateMargoNotebook(createEmptyMargoNotebook())
  }

  /**
   * Run the notebook
   */
  const run = () => {
    console.error('run() not implemented')
  }

  return (
    <div className={styles.Editor}>
      <NameEditor
        notebookName={notebookName}
        notebookNameRef={notebookNameRef}
        updateNotebookName={updateNotebookName}
      />
      <Spacer height={20} />
      <EditorControls
        handleRunNotebook={run}
        handleAddNewCell={addNewParentNode}
        handleReset={reset}
        handleSave={saveAsNotebook}
      />
      <Spacer height={30} />
      <CellTree
        handleToggleCellType={handleToggleCellType}
        handleMoveCellUp={moveNodeUp}
        handleMoveCellDown={moveNodeDown}
        handleDeleteCell={deleteCell}
        handleAddChildCell={addChildNode}
        margoNotebook={margoNotebook}
      />
    </div>
  )
}
