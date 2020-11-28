import { ICellModel } from "@jupyterlab/cells";
import { IMargoNotebookParentNode } from "../interfaces";
import emptyCellModel from "./createEmptyCellModel";

/**
 * Create a Margo notebook parent cell that wraps a given ICellModel
 * @param { ICellModel } cell 
 */
export function createParentNodeFromCell(cell: ICellModel): IMargoNotebookParentNode {
    return {
        id: cell.id.split("-")[0],
        cell,
        children: []
    }
}

/**
 * Create an empty Margo parent node
 * @returns { IMargoNotebookParentNode }
 */
export function createEmptyParentNode(): IMargoNotebookParentNode {
    return createParentNodeFromCell(emptyCellModel())
}