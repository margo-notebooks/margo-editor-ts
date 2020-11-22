import { IMargoCellTreeInternalNode, IMargoCellTreeLeafNode } from "../interfaces";

export default function addChildNodeToParent(parentNode: IMargoCellTreeInternalNode, childNode: IMargoCellTreeLeafNode) {
    console.log("Pushing to parentNode.chidlren", childNode.cell.id)
    parentNode.children.push(childNode)
}
