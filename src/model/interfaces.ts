import { ICellModel } from "@jupyterlab/cells/lib/model";

export interface IMargoNotebook {
    nodes: Array<IMargoNotebookParentNode>
}

export interface IMargoNotebookNode {
    cell: ICellModel
    id: string
}

export interface IMargoNotebookParentNode extends IMargoNotebookNode {
    children: Array<IMargoNotebookChildNode>
}

export interface IMargoNotebookChildNode extends IMargoNotebookNode {
    parentNode: IMargoNotebookParentNode;
    relationshipToParent: string;
}