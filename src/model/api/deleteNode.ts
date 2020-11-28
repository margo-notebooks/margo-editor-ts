import { IMargoNotebook, IMargoNotebookChildNode, IMargoNotebookNode, IMargoNotebookParentNode } from "../interfaces";
import { isAChildNode, isAParentNode } from "./isA";

function deleteNodeFromArray<T extends IMargoNotebookNode>(nodes: Array<T>, node: T): Array<T> {
    return nodes.filter(currentNode => currentNode !== node)
}

function deleteParentNode(margoNotebook: IMargoNotebook, parentNode: IMargoNotebookParentNode): IMargoNotebook {

    margoNotebook.nodes = deleteNodeFromArray<IMargoNotebookParentNode>(margoNotebook.nodes, parentNode)

    return margoNotebook

}

function deleteChildNode(margoNotebook: IMargoNotebook, childNode: IMargoNotebookChildNode): IMargoNotebook {

    childNode.parentNode.children = deleteNodeFromArray(childNode.parentNode.children, childNode)

    return margoNotebook

}

/**
 * Delete a given node from a notebook and return the modified notebook
 * @param {IMargoNotebook} margoNotebook 
 * @param {IMargoNotebookNode} node 
 */
export default function deleteNode(margoNotebook: IMargoNotebook, node: IMargoNotebookNode): IMargoNotebook {
    if (isAParentNode(node)) {
        return deleteParentNode(margoNotebook, node as IMargoNotebookParentNode)
    } else if (isAChildNode(node)) {
        return deleteChildNode(margoNotebook, node as IMargoNotebookChildNode)
    }
    console.error(node)
    throw new Error("Unknown node type")

}
