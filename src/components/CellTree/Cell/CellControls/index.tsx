import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../../../common/Button";
import ControlBar from "../../../common/ControlBar";

export interface CellControlsProps {
  handleDeleteCell: () => void;
}
export default function CellControls(props: CellControlsProps) {
  return (
    <div className="CellControls">
      <ControlBar>
        <Button
          icon={<FontAwesomeIcon icon={faTrash} />}
          onClick={props.handleDeleteCell}
        />
      </ControlBar>
    </div>
  );
}
