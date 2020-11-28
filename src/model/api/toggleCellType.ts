import { ICellModel } from "@jupyterlab/cells";
import { NotebookModel } from "@jupyterlab/notebook";
import { isACodeCell } from "./isA";

/**
 * Toggle a cell's type between code and markdown. Raw not supported
 * @param { ICellModel } cell 
 * @returns { ICellModel } 
 */
export function toggleCellType(cell: ICellModel): ICellModel {
    if (isACodeCell(cell)) {
        return new NotebookModel().contentFactory.createMarkdownCell({ cell: cell.toJSON() })
    }
    return new NotebookModel().contentFactory.createCodeCell({ cell: cell.toJSON() })
}