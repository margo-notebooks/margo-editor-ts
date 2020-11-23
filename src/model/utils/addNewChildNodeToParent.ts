import { IMargoCellTreeInternalNode } from "../interfaces";
import addChildNodeToParent from "./addChildNodeToParent";
import emptyLeafNode from "./emptyLeafNode";
// import getCellID from "./getCellID";

export default function addNewChildNodeToParent(parentNode: IMargoCellTreeInternalNode) {
    addChildNodeToParent(parentNode, emptyLeafNode(parentNode))
}