import { INotebookModel, NotebookModel } from "@jupyterlab/notebook";
import { IMargoNotebook } from "../interfaces";
import { flattenMargoNotebook } from "./flattenMargoNotebook";

/**
 * Convert a margo notebook to a Jupyter notebook
 * @param { IMargoNotebook } margoNotebook 
 * @param { INotebookModel} jupyterNotebook optional base notebook to start from. will only modify its cells
 */
export function convertToJupyter(margoNotebook: IMargoNotebook, jupyterNotebook?: INotebookModel): INotebookModel {

    let ret = jupyterNotebook ? jupyterNotebook : new NotebookModel({ languagePreference: "python" });
    ret.cells.removeRange(0, ret.cells.length)
    ret.cells.insertAll(0, flattenMargoNotebook(margoNotebook))

    return ret;

}