# Code style

Created: 2020-11-28

## Variable naming

"Cell" should be used to refer to @Jupyterlab Cell objects, while "Node" should be used for the Margo node construct that wraps a cell.

IMargoNotebook
IMargoNotebookNode
IMargoNotebookInternalNode
IMargoNotebookLeafNode

## Functional model API

The MargoNotebook API is in the `src/model` directory. It constsist of the `interfaces.ts` file and the functions defined in the `api` directory.

These functions have generally been given `verb + noun` names, such as `addChildNode`, and this practice should be continued.

Eventually will create an `index.ts` and expose functions only through this file, so that imports can be unified. These functions can ultimately be spun off into an entirely separate package at some point.

I also intend to make these functions fully abstract the @JupyterLab/cells types at some point.
