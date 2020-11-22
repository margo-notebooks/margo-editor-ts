import {
  faPlay,
  faPlus,
  faSave,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../common/Button";
import ControlBar from "../common/ControlBar";

export interface EditorControlsProps {
  handleReset: () => void;
  handleAddNewCell: () => void;
  handleRunNotebook: () => void;
  handleSave: () => void;
}

export default function EditorControls(props: EditorControlsProps) {
  return (
    <div className="EditorControls">
      <ControlBar>
        <Button
          onClick={props.handleAddNewCell}
          icon={<FontAwesomeIcon icon={faPlus} />}
        />
        <Button
          onClick={props.handleReset}
          icon={<FontAwesomeIcon icon={faTrash} />}
        />
        <Button
          onClick={props.handleRunNotebook}
          icon={<FontAwesomeIcon icon={faPlay} />}
        />
        <Button
          onClick={props.handleSave}
          icon={<FontAwesomeIcon icon={faSave} />}
        />
      </ControlBar>
    </div>
  );
}
