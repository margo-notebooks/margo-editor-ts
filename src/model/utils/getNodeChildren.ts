import { IMargoCellTreeInternalNode, IMargoCellTreeNode } from "../interfaces";

export default function getNodeChildren(node: IMargoCellTreeNode): Array<IMargoCellTreeNode> {
    if (node.hasOwnProperty("children")) {
        return (node as IMargoCellTreeInternalNode).children
    }
    return []
}