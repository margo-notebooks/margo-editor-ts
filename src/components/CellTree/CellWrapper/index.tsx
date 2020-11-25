import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { IMargoCellTreeNode } from "../../../model/interfaces";
import Button from "../../common/Button";
import ControlBar from "../../common/ControlBar";
import Cell from "../Cell";
import styles from "./CellWrapper.module.css";

export interface CellWrapperProps {
  node: IMargoCellTreeNode;
  handleDelete: () => void;
}

const CellWrapper: React.FunctionComponent<CellWrapperProps> = (props) => {
  const { node, handleDelete } = props;
  return (
    <div className={styles.CellWrapper}>
      <div className={styles.CellControlBar}>
        <Button
          onClick={handleDelete}
          icon={
            <div>
              <FontAwesomeIcon icon={faTrash} />
            </div>
          }
          // labelText="Delete cell"
          small
        ></Button>
      </div>

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
