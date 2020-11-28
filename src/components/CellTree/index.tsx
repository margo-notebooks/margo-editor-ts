import React from 'react'
import {
  IMargoNotebook,
  IMargoNotebookParentNode,
  IMargoNotebookNode,
} from '../../model/interfaces'
import CellCluster from './CellCluster'

export interface CellTreeProps {
  margoNotebook: IMargoNotebook
  handleToggleCellType: (node: IMargoNotebookNode) => void
  handleAddChildCell: (node: IMargoNotebookParentNode) => void
  handleDeleteCell: (node: IMargoNotebookNode) => void
  handleMoveCellUp: (node: IMargoNotebookNode) => void
  handleMoveCellDown: (node: IMargoNotebookNode) => void
}

/**
 * Render a Margo Notebook's cells
 * @param props
 */
export default function CellTree(props: CellTreeProps) {
  return (
    <div className="CellTree">
      {props.margoNotebook.nodes.map(
        (cellNode: IMargoNotebookParentNode, idx: number) => {
          return (
            <CellCluster
              handleToggleCellType={props.handleToggleCellType}
              handleMoveCellUp={props.handleMoveCellUp}
              handleMoveCellDown={props.handleMoveCellDown}
              handleDeleteCell={props.handleDeleteCell}
              handleAddChildCell={props.handleAddChildCell}
              key={idx}
              node={cellNode}
            />
          )
        }
      )}
    </div>
  )
}
