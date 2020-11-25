import React from "react";
import {
  IMargoCellTreeInternalNode,
  IMargoCellTreeNode,
} from "../../../model/interfaces";
import getCellID from "../../../model/utils/getCellID";
// import Cell from "../Cell";
// import CellClusterControls from "./CellClusterControls";
import styles from "./CellCluster.module.css";
// import ControlBar from "../../common/ControlBar";
// import Button from "../../common/Button";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Collapsible from "../../common/Collapsible";
import CollapsibleCell from "../CollapsibleCell";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export interface CellClusterProps {
  node: IMargoCellTreeInternalNode;
  depth?: number;
  handleAddChildCell: (parentCellID: string) => void;
  handleDeleteCell: (cellID: string) => void;
  handleMoveCellUp: (node: IMargoCellTreeNode) => void;
  handleMoveCellDown: (node: IMargoCellTreeNode) => void;
}

export default function CellCluster(props: CellClusterProps) {
  const childCount = props.node.children.length;
  const clusterLabel = `${props.node.id}${
    childCount > 0 ? `+${childCount}` : ""
  }`;
  return (
    <Collapsible collapsedLabel={clusterLabel}>
      <div className={styles.CellCluster}>
        <CollapsibleCell
          node={props.node}
          // label={`cell-id: '${props.node.id}'`}
          label={"Parent Cell"}
          handleMoveCellUp={() => {
            props.handleMoveCellUp(props.node);
          }}
          handleMoveCellDown={() => {
            props.handleMoveCellDown(props.node);
          }}
          handleAddCell={() => {
            props.handleAddChildCell(getCellID(props.node));
          }}
          handleDeleteCell={() => props.handleDeleteCell(getCellID(props.node))}
        />

        {props.node.children.length > 0 ? (
          <Collapsible
            icon={faChevronRight}
            collapsedLabel={`Child Cells (${props.node.children.length.toString()})`}
          >
            {props.node.children.map((node, idx) => (
              <CollapsibleCell
                handleMoveCellUp={() => {
                  props.handleMoveCellUp(node);
                }}
                handleMoveCellDown={() => {
                  props.handleMoveCellDown(node);
                }}
                label={`${node.relationshipLabel}: ${node.parentNode.id}`}
                handleAddCell={() => {
                  props.handleAddChildCell(getCellID(props.node));
                }}
                node={node}
                key={idx}
                handleDeleteCell={() => props.handleDeleteCell(getCellID(node))}
              />
            ))}
          </Collapsible>
        ) : null}
      </div>
    </Collapsible>
  );
}
