import { IMargoCellTreeNode } from "../interfaces";

export default function getCellID(node: IMargoCellTreeNode): string {
    // return node.cell.id
    return node.id
}