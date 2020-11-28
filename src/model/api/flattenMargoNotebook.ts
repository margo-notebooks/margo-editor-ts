import { ICellModel } from "@jupyterlab/cells";
import { IMargoNotebook, IMargoNotebookParentNode, IMargoNotebookChildNode, IMargoNotebookNode } from "../interfaces";
import { cloneCell } from "./cloneCell";
import getCellID from "./getCellID";
import { isAMarkdownCell } from "./isA";

function flattenChildNode(leafNode: IMargoNotebookChildNode): Array<ICellModel> {
    const { parentNode, relationshipToParent: relationshipLabel } = leafNode
    // const newCell = new CellModel({ cell: leafNode.cell.toJSON() })
    const newCell = cloneCell(leafNode.cell)

    let preamble = `# :: cell.id: '${leafNode.id}' ::\n` +
        `# :: rel.${relationshipLabel}: "${getCellID(parentNode)}" ::`

    if (isAMarkdownCell(newCell)) {
        preamble = "```margo\n" + preamble + "\n```"
    }
    newCell.value.text = `${preamble}\n${newCell.value.text}\n`;

    // return [leafNode.cell];
    return [newCell]
}

function flattenParentNode(parentNode: IMargoNotebookParentNode): Array<ICellModel> {
    // const newCell = new CellModel({ cell: parentNode.cell.toJSON() })
    const newCell = cloneCell(parentNode.cell)
    // let ret: Array<ICellModel> = [parentNode.cell]
    let preamble = `# :: cell.id: '${parentNode.id}' ::\n`
    if (isAMarkdownCell(newCell)) {
        preamble = "```margo\n" + preamble + "```"
    }
    newCell.value.text = `${preamble}\n${newCell.value.text}\n`;
    let ret: Array<ICellModel> = [newCell]

    for (let i = 0; i < parentNode.children.length; i++) {
        const child = parentNode.children[i];
        ret = ret.concat(flattenNode(child))
    }

    return ret;
}

function flattenNode(node: IMargoNotebookNode): Array<ICellModel> {
    if (node.hasOwnProperty("children")) {
        return flattenParentNode((node as IMargoNotebookParentNode))
    } else {
        return flattenChildNode((node as IMargoNotebookChildNode))
    }

}

/**
 * Flatten a margo notebook into an array of Jupyter cells
 * @param {IMargoNotebookParentNode} margoNotebook 
 * @returns { Array<ICellModel> }
 */
export function flattenMargoNotebook(margoNotebook: IMargoNotebook): Array<ICellModel> {

    let ret: Array<ICellModel> = []

    for (let i = 0; i < margoNotebook.nodes.length; i++) {
        const node = margoNotebook.nodes[i]
        ret = ret.concat(flattenNode(node))
    }
    return ret;
}