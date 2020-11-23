import { ICellModel } from "@jupyterlab/cells";
import { IMargoCellTreeInternalNode } from "../interfaces";
import emptyCellModel from "./emptyCellModel";

export function internalNodeFromCell(cell: ICellModel): IMargoCellTreeInternalNode {
    return {
        id: cell.id.split("-")[0],
        cell,
        children: []
    }

}

export default function emptInternalNode(): IMargoCellTreeInternalNode {
    return internalNodeFromCell(emptyCellModel())
}