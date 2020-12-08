import React, { RefObject } from 'react'
import styles from './NameEditor.module.css'

export interface NameEditorProps {
  notebookNameRef: RefObject<HTMLDivElement>
  notebookName: string
  updateNotebookName: (newName: string) => void
}

export default function NameEditor(props: NameEditorProps) {
  const { updateNotebookName } = props
  return (
    <div className={styles.NameEditor}>
      <h1>
        <span
          ref={props.notebookNameRef}
          contentEditable
          onBlur={() => {
            updateNotebookName(
              props.notebookNameRef.current?.innerText || 'Untitled Notebook'
            )
          }}
        >
          {props.notebookName}
        </span>
        <span>
          <small>.margo.ipynb</small>
        </span>
      </h1>
    </div>
  )
}
