import { IMargoNotebookNode } from "../interfaces";

/**
 * Get the Margo cell ID. Use this instead of accessing the cell.id property
 * directly as they may become decoupled
 * @param { IMargoNotebookNode } node 
 * @returns { string }
 */
export default function getCellID(node: IMargoNotebookNode): string {
    // return node.cell.id
    return node.id
}