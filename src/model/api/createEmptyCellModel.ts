import { CodeCellModel, ICellModel } from "@jupyterlab/cells";

/**
 * Create an empty code cell model
 * @returns { ICellModel }
 */
export default function createEmptyCodeCellModel(): ICellModel {
    const ret = new CodeCellModel({
        cell: {
            cell_type: "code",
            source: "",
            metadata: {}
        }
    })

    ret.value.text = ``

    return ret;
}