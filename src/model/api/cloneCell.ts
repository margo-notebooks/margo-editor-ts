import { ICellModel } from "@jupyterlab/cells";
import { NotebookModel } from "@jupyterlab/notebook";
import { isACodeCell, isAMarkdownCell } from "./isA";

/**
 * Clone a cell
 * @param { ICellModel } cell 
 * @returns { ICellModel }
 */
export function cloneCell(cell: ICellModel): ICellModel {
    if (isACodeCell(cell)) {
        return new NotebookModel().contentFactory.createCodeCell({ cell: cell.toJSON() })
    }
    if (isAMarkdownCell(cell)) {
        return new NotebookModel().contentFactory.createMarkdownCell({ cell: cell.toJSON() })

    }
    return new NotebookModel().contentFactory.createCell(cell.type, { cell: cell.toJSON() })
}