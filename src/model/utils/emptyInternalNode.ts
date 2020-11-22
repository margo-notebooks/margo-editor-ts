import { IMargoCellTreeInternalNode } from "../interfaces";
import emptyCellModel from "./emptyCellModel";

export default function emptInternalNode(): IMargoCellTreeInternalNode {
    return {
        cell: emptyCellModel(),
        children: []
    }
}