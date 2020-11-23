import React, { useState } from "react";
import {
  IMargoCellTreeLeafNode,
  IMargoCellTreeNode,
} from "../../../model/interfaces";
// import getCellID from "../../../model/utils/getCellID";
// import CellControls from "./CellControls";
import styles from "./Cell.module.css";

export interface CellProps {
  node: IMargoCellTreeNode;
  handleDeleteCell: (cellID: string) => void;
}

export default function Cell(props: CellProps) {
  const [collapsed] = useState<Boolean>(false);

  return (
    <div className={`${styles.Cell} ${collapsed ? styles.Collapsed : ""}`}>
      <div className={styles.CodeArea}>
        <pre>{props.node.cell.value.text}</pre>
      </div>
    </div>
  );
}
