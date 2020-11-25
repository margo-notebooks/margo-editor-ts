import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { IMargoCellTreeNode } from "../../../model/interfaces";
import Button from "../../common/Button";
import ControlBar from "../../common/ControlBar";
import Cell from "../Cell";
import EditableCellLabel from "../Cell/EditableCellLabel";
import styles from "./CellWrapper.module.css";

export interface CellWrapperProps {
  node: IMargoCellTreeNode;
}

const CellWrapper: React.FunctionComponent<CellWrapperProps> = (props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { node } = props;
  return (
    <div className={styles.CellWrapper}>
      <ControlBar>
        <EditableCellLabel
          text={node.id}
          onChange={(text) => (node.id = text)}
        ></EditableCellLabel>
        {props.children}{" "}
        <Button
          onClick={() => {
            setCollapsed(!collapsed);
          }}
          icon={
            <div
              className={`${styles.Rotator} ${
                collapsed ? styles.Rotate90 : null
              }`}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          }
          // labelText="Delete cell"
          small
        ></Button>
      </ControlBar>

      <Cell
        node={node}
        handleDeleteCell={() => {
          console.warn("TODO: Remove handleDeleteCell from Cell props");
        }}
      />
    </div>
  );
};

export default CellWrapper;
