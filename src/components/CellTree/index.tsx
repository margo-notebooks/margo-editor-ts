import React from "react";
import {
  IMargoCellTree,
  IMargoCellTreeInternalNode,
} from "../../model/interfaces";
import CellCluster from "./CellCluster";

export interface CellTreeProps {
  cellTree: IMargoCellTree;
  handleAddChildCell: (parentCellID: string) => void;
  handleDeleteCell: (cellID: string) => void;
}

export default function CellTree(props: CellTreeProps) {
  return (
    <div className="CellTree">
      {props.cellTree.cells.map(
        (cellNode: IMargoCellTreeInternalNode, idx: number) => {
          return (
            <CellCluster
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
