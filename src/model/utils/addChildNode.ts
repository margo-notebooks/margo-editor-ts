import { IMargoCellTree, IMargoCellTreeInternalNode, IMargoCellTreeLeafNode, IMargoCellTreeNode } from "../interfaces";
import addChildNodeToParent from "./addChildNodeToParent";
import emptyLeafNode from "./emptyLeafNode";
import getCellID from "./getCellID";
import getNodeByCellID from "./getNodeByCellID";

export function addChildNodeToParentWithID(cellTree: IMargoCellTree, parentCellID: string, childCell: IMargoCellTreeLeafNode) {
    const parentNode = getNodeByCellID(cellTree.cells, parentCellID)
    if (!parentNode) {
        console.error("Cannot add parent node to cell: Parent id not found", parentCellID);
        return
    }
    if (parentNode.hasOwnProperty("children")) {
        console.log("Adding to parent cell", getCellID(parentNode), getCellID(childCell))
        addChildNodeToParent((parentNode as IMargoCellTreeInternalNode), childCell)
    } else {
        console.error("cell is not able to append children")
    }
}

export function addNewChildNodeToParentWithId(cellTree: IMargoCellTree, parentCellID: string) {
    const newChildNode = emptyLeafNode(parentCellID)
    console.log("adding new child with id", newChildNode.cell.id)
    addChildNodeToParentWithID(cellTree, parentCellID, newChildNode)
}