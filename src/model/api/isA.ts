import { ICellModel } from "@jupyterlab/cells";
import { IMargoNotebookNode } from "../interfaces";

export function isACodeCell(cell: ICellModel) {
    return cell.type.toLowerCase() === "code"

}

export function isAMarkdownCell(cell: ICellModel) {
    return cell.type.toLowerCase() === "markdown"
}


/**
 * Determine if node is an IMargoNotebookParentNode. Beware, this is not a
 * complete check. It only looks for required properties and doesn't test their
 * values/types for validity
 * @param node 
 */
export function isAParentNode(node: IMargoNotebookNode): boolean {
    return node.hasOwnProperty("children")
}

/**
 * Determine if node is an IMargoChildNode. Beware, this is not a complete
 * check. It only looks for required properties and doesn't test their
 * values/types for validity
 * @param node 
 */
export function isAChildNode(node: IMargoNotebookNode): boolean {
    return node.hasOwnProperty("parentNode") && node.hasOwnProperty("relationshipToParent")
}