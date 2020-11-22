import { IMargoCellTreeLeafNode } from "../interfaces";
import emptyCellModel from "./emptyCellModel";

export default function emptyLeafNode(parentCellID: string): IMargoCellTreeLeafNode {
    return {
        cell: emptyCellModel(),
        parentCellID,
        relationshipLabel: "childOf"
    }
}