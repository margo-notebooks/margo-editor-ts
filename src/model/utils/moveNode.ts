import { IMargoCellTree, IMargoCellTreeInternalNode, IMargoCellTreeLeafNode, IMargoCellTreeNode } from "../interfaces";
import cloneTree from "./cloneTree";
import { isAChildNode, isAParentNode } from "./isA";

function array_move<T>(arr: Array<T>, old_index: number, new_index: number): Array<T> {
    if (new_index >= arr.length) return arr
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
};

export function getNodeIndex(cells: Array<IMargoCellTreeNode>, node: IMargoCellTreeNode) {
    for (let i = 0; i < cells.length; i++) {
        if (cells[i] === node) { return i }
    }
    return -1;
}

export function moveNode<T extends IMargoCellTreeNode>(cells: Array<T>, node: IMargoCellTreeNode, newIndex: number): Array<T> {

    if (newIndex < 0) return cells
    if (newIndex >= cells.length) return cells
    const index = getNodeIndex(cells, node)

    return array_move(cells, index, newIndex)
}

export function moveNodeWithinTree(tree: IMargoCellTree, node: IMargoCellTreeNode, direction: "up" | "down") {
    const newTree = cloneTree(tree);
    if (isAParentNode(node)) {
        const parentNode = node as IMargoCellTreeInternalNode

        const index = getNodeIndex(
            newTree.cells,
            parentNode
        );
        newTree.cells = moveNode(
            newTree.cells,
            parentNode,
            direction === "up" ? index - 1 : index + 1
        );
    } else if (isAChildNode(node)) {
        const childNode = node as IMargoCellTreeLeafNode
        const index = getNodeIndex(
            childNode.parentNode.children,
            node
        );

        childNode.parentNode.children = moveNode<IMargoCellTreeLeafNode>(
            childNode.parentNode.children,
            node,
            direction === "up" ? index - 1 : index + 1
        );
    }

    return newTree;
}



