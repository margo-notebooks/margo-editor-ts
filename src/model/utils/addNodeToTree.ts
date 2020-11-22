import { ICellModel } from "@jupyterlab/cells/lib/model";
import { IMargoCellTree, IMargoCellTreeInternalNode } from "../interfaces";
import emptyCellModel from "./emptyCellModel";

export function addNodeToTree(cellTree: IMargoCellTree, cell: ICellModel) {

    const internalNode: IMargoCellTreeInternalNode = {
        cell,
        children: []
    }

    cellTree.cells.push(internalNode)

}

export function addEmptyCell(cellTree: IMargoCellTree) {
    addNodeToTree(cellTree, emptyCellModel())
}