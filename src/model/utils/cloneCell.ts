import { CellModel, CodeCellModel, ICellModel } from "@jupyterlab/cells";
import { NotebookModel } from "@jupyterlab/notebook";

export function isCodeCell(cell: ICellModel) {
    return cell.type.toLowerCase() === "code"

}

export function isMarkdownCell(cell: ICellModel) {
    return cell.type.toLowerCase() === "markdown"
}

export default function cloneCell(cell: ICellModel): ICellModel {
    if (isCodeCell(cell)) {
        return new NotebookModel().contentFactory.createCodeCell({ cell: cell.toJSON() })
        // return new CodeCellModel({ cell: cell.toJSON() })
    }
    if (isMarkdownCell(cell)) {
        // return new MarkdownCellModel({ cell: cell.toJSON() })
        return new NotebookModel().contentFactory.createMarkdownCell({ cell: cell.toJSON() })

    }
    return new NotebookModel().contentFactory.createCell(cell.type, { cell: cell.toJSON() })
    // return new CellModel({ cell: cell.toJSON() })


}