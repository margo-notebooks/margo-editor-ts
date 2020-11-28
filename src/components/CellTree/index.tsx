import React from "react";
import {
  IMargoCellTree,
  IMargoCellTreeInternalNode,
  IMargoCellTreeNode,
} from "../../model/interfaces";
import CellCluster from "./CellCluster";

export interface CellTreeProps {
  cellTree: IMargoCellTree;
  handleToggleCellType: (node: IMargoCellTreeNode) => void;
  handleAddChildCell: (parentCellID: string) => void;
  handleDeleteCell: (cellID: string) => void;
  handleMoveCellUp: (node: IMargoCellTreeNode) => void;
  handleMoveCellDown: (node: IMargoCellTreeNode) => void;
}

export default function CellTree(props: CellTreeProps) {
  return (
    <div className="CellTree">
      {props.cellTree.cells.map(
        (cellNode: IMargoCellTreeInternalNode, idx: number) => {
          return (
            <CellCluster
              handleToggleCellType={props.handleToggleCellType}
              handleMoveCellUp={props.handleMoveCellUp}
              handleMoveCellDown={props.handleMoveCellDown}
              handleDeleteCell={props.handleDeleteCell}
              handleAddChildCell={props.handleAddChildCell}
              key={idx}
              node={cellNode}
            />
          );
        }
      )}
    </div>
  );
}
