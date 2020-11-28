import { IMargoNotebookParentNode, IMargoNotebookChildNode } from "../interfaces";
import createEmptyCodeCellModel from "./createEmptyCellModel";

/**
 * Create an empty Margo child node belonging to a given parent
 * @param { IMargoNotebookParentNode } parentNode 
 * @returns { IMargoNotebookChildNode }
 */
export default function createEmptyChildNode(parentNode: IMargoNotebookParentNode): IMargoNotebookChildNode {
    const cell = createEmptyCodeCellModel()
    return {
        id: cell.id.split("-")[0],
        cell,
        parentNode,
        relationshipToParent: "child-of"
    }
}