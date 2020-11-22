import { CellModel, ICellModel } from "@jupyterlab/cells";
import { IMargoCellTree, IMargoCellTreeInternalNode, IMargoCellTreeLeafNode, IMargoCellTreeNode } from "../interfaces";

function flattenLeafNode(leafNode: IMargoCellTreeLeafNode): Array<ICellModel> {
    const { parentCellID, relationshipLabel } = leafNode
    const newCell = new CellModel({ cell: leafNode.cell.toJSON() })
    newCell.value.text = `# :: cell.id: '${newCell.id}' ::\n` +
        `# :: rel.${relationshipLabel}: "${parentCellID}" ::\n` +
        `${newCell.value.text}\n`;

    // return [leafNode.cell];
    return [newCell]
}

function flattenInternal(parentNode: IMargoCellTreeInternalNode): Array<ICellModel> {
    const newCell = new CellModel({ cell: parentNode.cell.toJSON() })
    // let ret: Array<ICellModel> = [parentNode.cell]
    newCell.value.text = `# :: cell.id: '${newCell.id}' ::\n` +
        `${newCell.value.text}\n`;
    let ret: Array<ICellModel> = [newCell]

    for (let i = 0; i < parentNode.children.length; i++) {
        const child = parentNode.children[i];
        ret = ret.concat(flattenNode(child))
    }

    return ret;
}

function flattenNode(node: IMargoCellTreeNode): Array<ICellModel> {
    if (node.hasOwnProperty("children")) {
        return flattenInternal((node as IMargoCellTreeInternalNode))
    } else {
        return flattenLeafNode((node as IMargoCellTreeLeafNode))
    }

}

export default function flattenedCellArray(tree: IMargoCellTree): Array<ICellModel> {

    let ret: Array<ICellModel> = []

    for (let i = 0; i < tree.cells.length; i++) {
        const node = tree.cells[i]
        ret = ret.concat(flattenNode(node))
    }
    return ret;
}