import { IMargoCellTreeNode } from "../interfaces";
import getNodeChildren from "./getNodeChildren";

export default function getNodeByCellID(nodeArray: Array<IMargoCellTreeNode>, cellID: string): IMargoCellTreeNode | undefined {
    let ret: IMargoCellTreeNode | undefined

    for (let i = 0; i < nodeArray.length; i++) {
        const node = nodeArray[i];
        if (node.cell.id === cellID) { return node }
        const children = getNodeChildren(node)
        const result = getNodeByCellID(children, cellID)
        if (result !== undefined) {
            ret = result
            break;
        }
    }

    return ret;
}