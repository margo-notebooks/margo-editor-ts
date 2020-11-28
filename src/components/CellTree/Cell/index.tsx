import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  // IMargoCellTreeLeafNode,
  IMargoCellTreeNode,
} from "../../../model/interfaces";
import { isMarkdownCell } from "../../../model/utils/cloneCell";
import Button from "../../common/Button";
// import getCellID from "../../../model/utils/getCellID";
// import CellControls from "./CellControls";
import styles from "./Cell.module.css";
import CellEditor from "./CellEditor";
// import EditableCellLabel from "./EditableCellLabel";

export interface CellProps {
  node: IMargoCellTreeNode;
  handleDeleteCell: (cellID: string) => void;
}

export default function Cell(props: CellProps) {
  const [collapsed] = useState<boolean>(false);
  const [renderMarkdown, setRenderMarkdown] = useState<boolean>(false);

  return (
    <div className={`${styles.Cell} ${collapsed ? styles.Collapsed : ""}`}>
      {/* <EditableCellLabel
        text={props.node.id}
        onChange={(text: string) => {
          console.log("Updating cell id", text);
          props.node.id = text || props.node.cell.id.split("-")[0];
        }}
      /> */}

      {/*TODO - clean up the render toggle UX */}
      {isMarkdownCell(props.node.cell) ? (
        <div className={styles.MarkdownRenderArea}>
          <Button
            small
            onClick={() => setRenderMarkdown(!renderMarkdown)}
            icon={<FontAwesomeIcon icon={faEdit} />}
          ></Button>
          {renderMarkdown ? (
            <ReactMarkdown
              children={props.node.cell.value.text}
            ></ReactMarkdown>
          ) : null}
        </div>
      ) : null}
      {isMarkdownCell(props.node.cell) && renderMarkdown ? null : (
        <div className={styles.CodeArea}>
          <CellEditor
            updateText={() => {
              console.warn("updateText not implemented");
            }}
            cell={props.node.cell}
          ></CellEditor>
        </div>
      )}
    </div>
  );
}
