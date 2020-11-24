import React, { useState } from "react";
import {
  IMargoCellTreeLeafNode,
  IMargoCellTreeNode,
} from "../../../model/interfaces";
// import getCellID from "../../../model/utils/getCellID";
// import CellControls from "./CellControls";
import styles from "./Cell.module.css";
import CellEditor from "./CellEditor";
import EditableCellLabel from "./EditableCellLabel";

export interface CellProps {
  node: IMargoCellTreeNode;
  handleDeleteCell: (cellID: string) => void;
}

export default function Cell(props: CellProps) {
  const [collapsed] = useState<Boolean>(false);

  return (
    <div className={`${styles.Cell} ${collapsed ? styles.Collapsed : ""}`}>
      <EditableCellLabel
        text={props.node.id}
        onChange={(text: string) => {
          console.log("Updating cell id", text);
          props.node.id = text || props.node.cell.id.split("-")[0];
        }}
      />
      <div className={styles.CodeArea}>
        <pre>
          {props.node.hasOwnProperty("relationshipLabel")
            ? (props.node as IMargoCellTreeLeafNode).relationshipLabel
            : null}
        </pre>
        {/* <pre>
          cell-id:{" "}
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.value) {
                props.node.id = e.target.value as string;
              }
            }}
            type="text"
            placeholder={props.node.id}
          ></input>
        </pre> */}
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
