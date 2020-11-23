import { CodeCellModel } from "@jupyterlab/cells";

export default function emptyCellModel() {
    const ret = new CodeCellModel({
        cell: {
            cell_type: "code",
            source: "",
            metadata: {}
        }
    })

    // ret.value.text = `# :: cell.id: '${ret.id}' ::\n`
    // ret.value.text = `# placeholder source code for cell '${ret.id}' ::\n`
    ret.value.text = `# HELLO`
    // console.log("Generated new cell model", ret.id)
    return ret;
}