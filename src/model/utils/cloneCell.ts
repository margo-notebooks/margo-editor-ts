import { CellModel, CodeCellModel, ICellModel, MarkdownCellModel } from "@jupyterlab/cells";

function isCodeCell(cell: ICellModel) {


}

export default function cloneCell(cell: ICellModel): ICellModel {
    if (cell.type === "code") return new CodeCellModel({ cell: cell.toJSON() })
    // if (cell.hasOwnProperty("cell_type") && ())
    if (cell.type === "markdown") return new MarkdownCellModel({ cell: cell.toJSON() })
    return new CellModel({ cell: cell.toJSON() })
}