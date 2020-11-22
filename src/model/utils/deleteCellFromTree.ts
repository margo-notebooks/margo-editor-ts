import { IMargoCellTree, IMargoCellTreeInternalNode, IMargoCellTreeLeafNode, IMargoCellTreeNode } from "../interfaces";
import emptyCellTree from "./emptyCellTree";
import getCellID from "./getCellID";

function deleteNodeWithIDFromLeafNodes(nodes: Array<IMargoCellTreeLeafNode>, cellID: string): Array<IMargoCellTreeLeafNode> {
    let ret: Array<IMargoCellTreeLeafNode> = nodes.filter((node: IMargoCellTreeLeafNode) => getCellID(node) !== cellID)

    return ret;
}

function deleteNodeWithIDFromInternalNodes(nodes: Array<IMargoCellTreeInternalNode>, cellID: string): Array<IMargoCellTreeInternalNode> {

    let ret: Array<IMargoCellTreeInternalNode> = []
    for (let i = 0; i < nodes.length; i++) {

        const node = nodes[i]
        const nodeID = getCellID(node)
        if (nodeID === cellID) { continue }
        node.children = deleteNodeWithIDFromLeafNodes(node.children, cellID)
        ret.push(node)
        console.log("Pushing node", node)
    }
    return ret
}

export default function deleteNodeWithIDFromTree(tree: IMargoCellTree, cellID: string): IMargoCellTree {

    let ret = emptyCellTree()

    ret.cells = deleteNodeWithIDFromInternalNodes(tree.cells, cellID)

    return ret;
}