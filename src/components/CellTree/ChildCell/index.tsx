import { noAuto } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faChevronRight,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IMargoCellTreeLeafNode } from "../../../model/interfaces";
import Button from "../../common/Button";
import EditableCellLabel from "../Cell/EditableCellLabel";
import CellWrapper from "../CellWrapper";
import styles from "./ChildCell.module.css";

export interface ChildCellProps {
  node: IMargoCellTreeLeafNode;
  handleDelete: () => void;
}

export default function ChildCell(props: ChildCellProps) {
  const { node, handleDelete } = props;
  return (
    <div className={styles.ChildCell}>
      <CellWrapper node={node}>
        <EditableCellLabel
          inverted
          onChange={() => {}}
          text={node.relationshipLabel}
        ></EditableCellLabel>

        {/* <div>
          {node.relationshipLabel}: {node.parentNode.id}
        </div> */}
        <Button
          onClick={handleDelete}
          icon={<FontAwesomeIcon icon={faTrash} />}
          //   labelText="Delete cell"
          small
        ></Button>
      </CellWrapper>
    </div>
  );
}
