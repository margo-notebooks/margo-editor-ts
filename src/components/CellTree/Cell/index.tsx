import React from "react";
import { IMargoCellTreeNode } from "../../../model/interfaces";
// import getCellID from "../../../model/utils/getCellID";
// import CellControls from "./CellControls";
import styles from "./Cell.module.css";

export interface CellProps {
  node: IMargoCellTreeNode;
  handleDeleteCell: (cellID: string) => void;
}

export default function Cell(props: CellProps) {
  return (
    <div className={styles.Cell}>
      {/* <CellControls
        handleDeleteCell={() => {
          props.handleDeleteCell(getCellID(props.node));
        }}
      ></CellControls> */}
      <div className={styles.CodeArea}>
        <pre>{props.node.cell.value.text}</pre>
      </div>
    </div>
  );
}
