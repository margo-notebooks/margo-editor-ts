import React from "react";
import { IMargoCellTreeInternalNode } from "../../../model/interfaces";
import getCellID from "../../../model/utils/getCellID";
import Cell from "../Cell";
// import CellClusterControls from "./CellClusterControls";
import styles from "./CellCluster.module.css";
import ControlBar from "../../common/ControlBar";
import Button from "../../common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import ChildCell from "../ChildCell";
import ParentCell from "../ParentCell";

export interface CellClusterProps {
  node: IMargoCellTreeInternalNode;
  depth?: number;
  handleAddChildCell: (parentCellID: string) => void;
  handleDeleteCell: (cellID: string) => void;
}

export default function CellCluster(props: CellClusterProps) {
  return (
    <div className={styles.CellCluster}>
      <ParentCell
        handleAddcell={() => {
          props.handleAddChildCell(getCellID(props.node));
        }}
        handleDelete={() => props.handleDeleteCell(getCellID(props.node))}
        node={props.node}
      />
      {/* <ControlBar>
        <Button
          icon={<FontAwesomeIcon icon={faPlus} />}
          onClick={() => {
            props.handleAddChildCell(getCellID(props.node));
          }}
        />
        <Button
          icon={<FontAwesomeIcon icon={faTrash} />}
          onClick={() => props.handleDeleteCell(getCellID(props.node))}
        />
      </ControlBar> */}
      {/* <Cell node={props.node} handleDeleteCell={props.handleDeleteCell} /> */}
      <div className={styles.ChildCellArea}>
        {props.node.children.map((node, idx) => (
          <ChildCell
            node={node}
            key={idx}
            handleDelete={() => props.handleDeleteCell(getCellID(node))}
          />
          // <div key={idx} className={styles.ChildCellWrapper}>
          //   <div className={styles.ControlButtonArea}>
          //     <Button
          //       icon={<FontAwesomeIcon icon={faTrash} />}
          //       onClick={() => props.handleDeleteCell(getCellID(node))}
          //     />
          //   </div>

          //   <Cell handleDeleteCell={props.handleDeleteCell} node={node} />
          // </div>
        ))}
      </div>
    </div>
  );
}
