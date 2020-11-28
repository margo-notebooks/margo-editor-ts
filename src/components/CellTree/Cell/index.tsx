import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { IMargoNotebookNode } from '../../../model/interfaces'
import { isAMarkdownCell } from '../../../model/api/isA'
import Button from '../../common/Button'
import styles from './Cell.module.css'
import CellEditor from './CellEditor'

export interface CellProps {
  node: IMargoNotebookNode
  handleDeleteCell: (cellID: string) => void
}

/**
 * Render a cell, whether its code or markdown. Handle toggling between rendered
 * and unrendered markdown
 * @param props
 */
export default function Cell(props: CellProps) {
  const [collapsed] = useState<boolean>(false)
  const [renderMarkdown, setRenderMarkdown] = useState<boolean>(false)

  return (
    <div className={`${styles.Cell} ${collapsed ? styles.Collapsed : ''}`}>
      {/*TODO - clean up the render toggle UX */}
      {isAMarkdownCell(props.node.cell) ? (
        <div className={styles.MarkdownRenderArea}>
          <Button
            small
            onClick={() => setRenderMarkdown(!renderMarkdown)}
            icon={<FontAwesomeIcon icon={faEdit} />}
          ></Button>
          {renderMarkdown ? (
            <ReactMarkdown
              children={props.node.cell.value.text}
            ></ReactMarkdown>
          ) : null}
        </div>
      ) : null}
      {isAMarkdownCell(props.node.cell) && renderMarkdown ? null : (
        <div className={styles.CodeArea}>
          <CellEditor
            updateText={() => {
              console.warn('updateText not implemented')
            }}
            cell={props.node.cell}
          ></CellEditor>
        </div>
      )}
    </div>
  )
}
