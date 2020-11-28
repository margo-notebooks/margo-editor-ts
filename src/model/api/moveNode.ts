import { IMargoNotebook, IMargoNotebookParentNode, IMargoNotebookChildNode, IMargoNotebookNode } from "../interfaces";
import { cloneNotebook } from "./cloneNotebook";
import { isAChildNode, isAParentNode } from "./isA";

// Stack Overflow Quickie
function array_move<T>(arr: Array<T>, old_index: number, new_index: number): Array<T> {
    if (new_index >= arr.length) return arr
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
};

/**
 * Get the index of a node from an array of nodes
 * @param cells 
 * @param node 
 * @returns { number } -1 if not found
 */
export function getNodeIndex(cells: Array<IMargoNotebookNode>, node: IMargoNotebookNode) {
    for (let i = 0; i < cells.length; i++) {
        if (cells[i] === node) { return i }
    }
    return -1;
}

/**
 * Move a node to a given position
 * @param cells 
 * @param node 
 * @param newIndex 
 */
export function moveNode<T extends IMargoNotebookNode>(cells: Array<T>, node: IMargoNotebookNode, newIndex: number): Array<T> {

    if (newIndex < 0) return cells
    if (newIndex >= cells.length) return cells
    const index = getNodeIndex(cells, node)

    return array_move(cells, index, newIndex)
}

/**
 * move a node up or down one position if possible, otherwise does nothing
 * @param tree 
 * @param node 
 * @param direction 
 */
export function moveNodeWithinTree(tree: IMargoNotebook, node: IMargoNotebookNode, direction: "up" | "down") {
    const newTree = cloneNotebook(tree);
    if (isAParentNode(node)) {
        const parentNode = node as IMargoNotebookParentNode

        const index = getNodeIndex(
            newTree.nodes,
            parentNode
        );
        newTree.nodes = moveNode(
            newTree.nodes,
            parentNode,
            direction === "up" ? index - 1 : index + 1
        );
    } else if (isAChildNode(node)) {
        const childNode = node as IMargoNotebookChildNode
        const index = getNodeIndex(
            childNode.parentNode.children,
            node
        );

        childNode.parentNode.children = moveNode<IMargoNotebookChildNode>(
            childNode.parentNode.children,
            node,
            direction === "up" ? index - 1 : index + 1
        );
    }

    return newTree;
}



