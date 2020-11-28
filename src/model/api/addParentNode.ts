import { ICellModel } from "@jupyterlab/cells/lib/model";
import { IMargoNotebook, IMargoNotebookParentNode } from "../interfaces";
import { cloneNotebook } from "./cloneNotebook";
import emptyCellModel from "./createEmptyCellModel";
import { createParentNodeFromCell } from "./createEmptyParentNode";

/**
 * Create and add an IMargoNotebookParentNode based on a given ICellModel
 * @param { IMargoNotebook } margoNotebook 
 * @param { ICellModel } cell 
 * @returns { IMargoNotebook }
 */
export function addParentNodeToNotebook(margoNotebook: IMargoNotebook, cell: ICellModel): IMargoNotebook {
    const newNotebook = cloneNotebook(margoNotebook)
    const internalNode: IMargoNotebookParentNode = createParentNodeFromCell(cell)
    newNotebook.nodes.push(internalNode)
    return newNotebook

}

/**
 * Add an empty IMargoNotebookParentNode 
 * @param { IMargoNotebook } margoNotebook 
 * @returns { IMargoNotebook }
 */
export function addEmptyParentNodeToNotebook(margoNotebook: IMargoNotebook): IMargoNotebook {
    return addParentNodeToNotebook(margoNotebook, emptyCellModel())
}