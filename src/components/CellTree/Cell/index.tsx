import React, { useState } from "react";
import {
  IMargoCellTreeLeafNode,
  IMargoCellTreeNode,
} from "../../../model/interfaces";
// import getCellID from "../../../model/utils/getCellID";
// import CellControls from "./CellControls";
import styles from "./Cell.module.css";
import CellEditor from "./CellEditor";

export interface CellProps {
  node: IMargoCellTreeNode;
  handleDeleteCell: (cellID: string) => void;
}

export default function Cell(props: CellProps) {
  const [collapsed] = useState<Boolean>(false);

  return (
    <div className={`${styles.Cell} ${collapsed ? styles.Collapsed : ""}`}>
      <div className={styles.CodeArea}>
        <pre>
          {props.node.hasOwnProperty("relationshipLabel")
            ? (props.node as IMargoCellTreeLeafNode).relationshipLabel
            : null}
        </pre>
        <pre>
          cell-id:{" "}
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.value) {
                console.log("Updating", e.target.value);
                props.node.id = e.target.value as string;
              }
            }}
            type="text"
            placeholder={props.node.id}
          ></input>
        </pre>
        <CellEditor
          updateText={() => {
            console.warn("updateText not implemented");
          }}
          cell={props.node.cell}
        ></CellEditor>
      </div>
    </div>
  );
}
