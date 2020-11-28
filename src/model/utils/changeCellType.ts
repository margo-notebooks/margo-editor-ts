import { ICellModel, IMarkdownCellModel, } from "@jupyterlab/cells";
import { NotebookModel } from "@jupyterlab/notebook";
import { isCodeCell } from "./cloneCell";

export function convertToMarkdownCell(cell: ICellModel): IMarkdownCellModel | undefined {

    return new NotebookModel().contentFactory.createMarkdownCell({ cell: cell.toJSON() })

}

export function toggleCellType(cell: ICellModel) {
    if (isCodeCell(cell)) return new NotebookModel().contentFactory.createMarkdownCell({ cell: cell.toJSON() })
    return new NotebookModel().contentFactory.createCodeCell({ cell: cell.toJSON() })


}