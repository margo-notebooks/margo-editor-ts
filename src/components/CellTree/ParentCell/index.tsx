import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IMargoCellTreeInternalNode } from "../../../model/interfaces";
import Button from "../../common/Button";
import EditableCellLabel from "../Cell/EditableCellLabel";
import CellWrapper from "../CellWrapper";

export interface ParentCellProps {
  node: IMargoCellTreeInternalNode;
  handleDelete: () => void;
  handleAddcell: () => void;
}

export default function ParentCell(props: ParentCellProps) {
  const { node, handleDelete, handleAddcell } = props;
  return (
    <CellWrapper node={node}>
      <Button
        onClick={handleDelete}
        icon={<FontAwesomeIcon icon={faTrash} />}
        small
      ></Button>
      <Button
        onClick={handleAddcell}
        icon={<FontAwesomeIcon icon={faPlus} />}
        small
      ></Button>
    </CellWrapper>
  );
}
