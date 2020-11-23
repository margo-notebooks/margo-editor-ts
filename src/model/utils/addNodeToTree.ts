import { ICellModel } from "@jupyterlab/cells/lib/model";
import { IMargoCellTree, IMargoCellTreeInternalNode } from "../interfaces";
import emptyCellModel from "./emptyCellModel";
import { internalNodeFromCell } from "./emptyInternalNode";

export function addNodeToTree(cellTree: IMargoCellTree, cell: ICellModel) {

    const internalNode: IMargoCellTreeInternalNode = internalNodeFromCell(cell)
    // const internalNode: IMargoCellTreeInternalNode = {
    //     id: cell.id,
    //     cell,
    //     children: []
    // }

    cellTree.cells.push(internalNode)

}

export function addEmptyCell(cellTree: IMargoCellTree) {
    addNodeToTree(cellTree, emptyCellModel())
}