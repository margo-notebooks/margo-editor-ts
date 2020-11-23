import { IMargoCellTreeInternalNode, IMargoCellTreeLeafNode } from "../interfaces";
import emptyCellModel from "./emptyCellModel";

// export default function emptyLeafNode(parentCellID: string): IMargoCellTreeLeafNode {
//     return {
//         cell: emptyCellModel(),
//         parentCellID,
//         relationshipLabel: "childOf"
//     }
// }

export default function emptyLeafNode(parentNode: IMargoCellTreeInternalNode): IMargoCellTreeLeafNode {
    const cell = emptyCellModel()
    return {
        id: cell.id.split("-")[0],
        cell,
        parentNode,
        relationshipLabel: "child-of"
    }
}