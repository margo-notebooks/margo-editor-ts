import { INotebookModel, NotebookModel } from "@jupyterlab/notebook";
import { IMargoCellTree } from "../interfaces";
import flattenedCellArray from "./flatCellList";

export default function treeToNotebook(tree: IMargoCellTree, notebook?: INotebookModel): INotebookModel {

    let ret = notebook ? notebook : new NotebookModel();
    ret.cells.removeRange(0, ret.cells.length)
    ret.cells.insertAll(0, flattenedCellArray(tree))

    // add in the margo syntax

    return ret;

}