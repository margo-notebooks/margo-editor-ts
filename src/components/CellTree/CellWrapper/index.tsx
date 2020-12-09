import { faCode, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faMarkdown } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { IMargoNotebookNode } from '../../../model/interfaces'
import Button from '../../common/Button'
import Cell from '../Cell'
import styles from './CellWrapper.module.css'

export interface CellWrapperProps {
  node: IMargoNotebookNode
  handleDelete: () => void
  handleToggleCellType: () => void
  controls?: JSX.Element
}

/**
 * Render a cell plus its controls
 * @param props
 */
const CellWrapper: React.FunctionComponent<CellWrapperProps> = (props) => {
  const { node, handleDelete, handleToggleCellType } = props
  return (
    <div className={styles.CellWrapper}>
      <div className={styles.CellControlBar}>
        {props.controls}
        <Button
          onClick={handleDelete}
          icon={
            <div>
              <FontAwesomeIcon icon={faTrash} />
            </div>
          }
          small
        ></Button>
        <Button
          small
          onClick={handleToggleCellType}
          icon={
            <div>
              <FontAwesomeIcon
                icon={node.cell.type === 'code' ? faCode : faMarkdown}
              />
            </div>
          }
        />
      </div>

      <Cell
        node={node}
        handleDeleteCell={() => {
          console.warn('TODO: Remove handleDeleteCell from Cell props')
        }}
      />
    </div>
  )
}

export default CellWrapper
