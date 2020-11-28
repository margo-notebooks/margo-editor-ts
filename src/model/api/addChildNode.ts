import { IMargoNotebookChildNode, IMargoNotebookParentNode } from "../interfaces";
import createEmptyChildNode from "./createEmptyChildNode";

/**
 * Add child node to parent
 * @param parentNode 
 * @param childNode 
 */
export function addChildNodeToParent(parentNode: IMargoNotebookParentNode, childNode: IMargoNotebookChildNode) {
    childNode.parentNode = parentNode
    parentNode.children.push(childNode)
}

/**
 * Add a new child node to a parent
 * @param parentNode 
 * @returns { IMargoNotebookChildNode }
 */
export function addNewChildNodeToParent(parentNode: IMargoNotebookParentNode): IMargoNotebookChildNode {
    const ret = createEmptyChildNode(parentNode)
    addChildNodeToParent(parentNode, ret)
    return ret
}