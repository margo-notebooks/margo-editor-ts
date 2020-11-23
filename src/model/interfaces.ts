import { ICellModel } from "@jupyterlab/cells/lib/model";


export interface IMargoCellTree {
    cells: Array<IMargoCellTreeInternalNode>
}

export interface IMargoCellTreeNode {
    cell: ICellModel
    id: string
}

export interface IMargoCellTreeInternalNode extends IMargoCellTreeNode {
    // parentNode: IMargoCellTreeNode;
    // NOTE: for now the maximum tree height is 2:
    // (root -(1)-> primary cell -(2)-> related cell)
    children: Array<IMargoCellTreeLeafNode>
}

export interface IMargoCellTreeLeafNode extends IMargoCellTreeNode {
    // parentCellID: string;
    parentNode: IMargoCellTreeInternalNode;
    relationshipLabel: string;
}