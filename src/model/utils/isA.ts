import { IMargoCellTreeInternalNode, IMargoCellTreeNode } from "../interfaces";

export function isAParentNode(node: IMargoCellTreeNode): boolean {
    return node.hasOwnProperty("children")
}

export function isAChildNode(node: IMargoCellTreeNode): boolean {
    return node.hasOwnProperty("parentNode") && node.hasOwnProperty("relationshipLabel")
}