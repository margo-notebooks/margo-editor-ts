import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../../../common/Button";
import ControlBar from "../../../common/ControlBar";
export interface CellClusterControlsProps {
  handleAddChildCell: () => void;
}

export default function CellClusterControls(props: CellClusterControlsProps) {
  return (
    <div className="CellClusterControls">
      <ControlBar>
        <Button
          onClick={props.handleAddChildCell}
          icon={<FontAwesomeIcon icon={faPlus} />}
        />
        
      </ControlBar>
    </div>
  );
}
