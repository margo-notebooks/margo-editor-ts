import React from 'react'
import {
  IMargoNotebookParentNode,
  IMargoNotebookNode,
} from '../../../model/interfaces'
import styles from './CellCluster.module.css'
import Collapsible from '../../common/Collapsible'
import CollapsibleCell from '../CollapsibleCell'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export interface CellClusterProps {
  node: IMargoNotebookParentNode
  depth?: number
  handleToggleCellType: (node: IMargoNotebookNode) => void
  handleAddChildCell: (node: IMargoNotebookParentNode) => void
  handleDeleteCell: (node: IMargoNotebookNode) => void
  handleMoveCellUp: (node: IMargoNotebookNode) => void
  handleMoveCellDown: (node: IMargoNotebookNode) => void
}

/**
 * Render a parent cell and all of its children
 * @param props
 */
export default function CellCluster(props: CellClusterProps) {
  const childCount = props.node.children.length
  const clusterLabel = `${props.node.id}${
    childCount > 0 ? `+${childCount}` : ''
  }`
  return (
    <Collapsible collapsedLabel={clusterLabel}>
      <div className={styles.CellCluster}>
        <CollapsibleCell
          handleToggleCellType={() => props.handleToggleCellType(props.node)}
          node={props.node}
          label={'Parent Cell'}
          handleMoveCellUp={() => {
            props.handleMoveCellUp(props.node)
          }}
          handleMoveCellDown={() => {
            props.handleMoveCellDown(props.node)
          }}
          handleAddCell={() => {
            props.handleAddChildCell(props.node)
          }}
          handleDeleteCell={() => props.handleDeleteCell(props.node)}
        />

        {props.node.children.length > 0 ? (
          <Collapsible
            icon={faChevronRight}
            collapsedLabel={`Child Cells (${props.node.children.length.toString()})`}
          >
            {props.node.children.map((node, idx) => (
              <CollapsibleCell
                handleToggleCellType={() => props.handleToggleCellType(node)}
                handleMoveCellUp={() => {
                  props.handleMoveCellUp(node)
                }}
                handleMoveCellDown={() => {
                  props.handleMoveCellDown(node)
                }}
                label={`${node.relationshipToParent}: ${node.parentNode.id}`}
                handleAddCell={() => {
                  props.handleAddChildCell(props.node)
                }}
                node={node}
                key={idx}
                handleDeleteCell={() => props.handleDeleteCell(node)}
              />
            ))}
          </Collapsible>
        ) : null}
      </div>
    </Collapsible>
  )
}
