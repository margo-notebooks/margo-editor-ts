import {
  faPlay,
  faPlus,
  faSave,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Button from '../common/Button'
import ControlBar from '../common/ControlBar'

export interface EditorControlsProps {
  handleReset: () => void
  handleAddNewCell: () => void
  handleRunNotebook: () => void
  handleSave: () => void
}

/**
 * Render notebook-level editor controls
 * @param props
 */
export default function EditorControls(props: EditorControlsProps) {
  return (
    <div className="EditorControls">
      <ControlBar>
        <Button
          small
          onClick={props.handleAddNewCell}
          icon={<FontAwesomeIcon icon={faPlus} />}
        />
        <Button
          small
          onClick={props.handleReset}
          icon={<FontAwesomeIcon icon={faTrash} />}
        />
        <Button
          small
          onClick={props.handleRunNotebook}
          icon={<FontAwesomeIcon icon={faPlay} />}
        />
        <Button
          small
          onClick={props.handleSave}
          icon={<FontAwesomeIcon icon={faSave} />}
        />
      </ControlBar>
    </div>
  )
}
