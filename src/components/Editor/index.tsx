import React, { RefObject, useRef, useState } from "react";
import {
  IMargoCellTree,
  IMargoCellTreeInternalNode,
  IMargoCellTreeNode,
} from "../../model/interfaces";
import addChildNodeToParent from "../../model/utils/addChildNodeToParent";
import { addEmptyCell } from "../../model/utils/addNodeToTree";
import { toggleCellType } from "../../model/utils/changeCellType";
import cloneTree from "../../model/utils/cloneTree";
import deleteNodeWithIDFromTree from "../../model/utils/deleteCellFromTree";
import emptyCellTree from "../../model/utils/emptyCellTree";
import emptyLeafNode from "../../model/utils/emptyLeafNode";
// import getCellID from "../../model/utils/getCellID";
import getNodeByCellID from "../../model/utils/getNodeByCellID";
import { moveNodeWithinTree } from "../../model/utils/moveNode";
import treeToNotebook from "../../model/utils/treeToNotebook";
import CellTree from "../CellTree";
import EditorControls from "../EditorControls";

export default function Editor() {
  const [cellTree, updateCellTree] = useState<IMargoCellTree>(emptyCellTree());
  const [notebookName, updateNotebookName] = useState<string>(
    "Untitled Notebook"
  );

  const notebookNameRef: RefObject<HTMLDivElement> = useRef(null);

  const handleToggleCellType = (node: IMargoCellTreeNode) => {
    node.cell = toggleCellType(node.cell);
    updateCellTree((oldTree) => cloneTree(oldTree));
  };

  const addNewCell = () => {
    updateCellTree((oldTree) => {
      const newTree = cloneTree(oldTree);
      addEmptyCell(newTree);
      return newTree;
    });
  };

  const moveCellUp = (node: IMargoCellTreeNode) => {
    updateCellTree((oldTree) => moveNodeWithinTree(oldTree, node, "up"));
  };

  const moveCellDown = (node: IMargoCellTreeNode) => {
    updateCellTree((oldTree) => moveNodeWithinTree(oldTree, node, "down"));
  };

  const saveAsNotebook = () => {
    console.log("saveAsNotebook() called");
    console.log(treeToNotebook(cellTree).toJSON());

    const storageObj = treeToNotebook(cellTree);

    var dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(storageObj));
    var dlAnchorElem = document.createElement("a");
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `${notebookName}.ipynb`);
    dlAnchorElem.click();
  };

  const addChildCell = (parentCellID: string) => {
    console.log("AddChildCell() called");
    const newTree = cloneTree(cellTree);

    const parentNode = getNodeByCellID(newTree.cells, parentCellID);
    if (!parentNode) {
      console.warn("addChildCell: parent not found");
      return;
    }
    if (!parentNode.hasOwnProperty("children")) {
      console.warn("parentNode not a parent");
      return;
    }
    // const childNode = emptyLeafNode(parentCellID);
    const childNode = emptyLeafNode(parentNode as IMargoCellTreeInternalNode);

    // childNode.cell.value.text =
    //   childNode.cell.value.text +
    //   `# :: rel.childOf: "${getCellID(parentNode)}" ::\n`;

    addChildNodeToParent(parentNode as IMargoCellTreeInternalNode, childNode);

    // addNewChildNodeToParentWithId(newTree, parentCellID);
    updateCellTree(newTree);

    // TODO - Figure out why the below approach fails (generates two)
    // new cells each time. For now, the approach above works just fine

    // updateCellTree((oldTree) => {
    //   const newTree = cloneTree(oldTree);
    //   console.log(new Date(), "Adding child cell to parent cell", parentCellID);

    //   addNewChildNodeToParentWithId(newTree, parentCellID);

    //   return newTree;
    // });
  };

  const deleteCell = (cellID: string) => {
    console.log("deleteCell() called", cellID);
    updateCellTree((oldTree) => {
      const newTree = deleteNodeWithIDFromTree(cloneTree(oldTree), cellID);

      return newTree;
    });
  };

  const reset = () => {
    console.log("reset() called");
    updateCellTree(emptyCellTree());
  };

  const run = () => {
    console.log("run() called");
    console.error("run not implemented");
  };

  console.log("Rendering with cellTree", cellTree.cells.length, cellTree);

  return (
    <div className="MargoEditor">
      <div>
        <h3>
          <span
            ref={notebookNameRef}
            contentEditable
            onBlur={() => {
              updateNotebookName(
                notebookNameRef.current?.innerText || "Untitled Notebook"
              );
            }}
          >
            {notebookName}
          </span>
          <span>
            <small>.margo.ipynb</small>
          </span>
        </h3>
      </div>
      <EditorControls
        handleRunNotebook={run}
        handleAddNewCell={addNewCell}
        handleReset={reset}
        handleSave={saveAsNotebook}
      />
      <CellTree
        handleToggleCellType={handleToggleCellType}
        handleMoveCellUp={moveCellUp}
        handleMoveCellDown={moveCellDown}
        handleDeleteCell={deleteCell}
        handleAddChildCell={addChildCell}
        cellTree={cellTree}
      />
    </div>
  );
}
