import { IMargoCellTree } from "../interfaces";

export default function cloneTree(tree: IMargoCellTree): IMargoCellTree {
    const newTree: IMargoCellTree = {
        cells: [...tree.cells]
    }

    return newTree
}