import {
  faArrowCircleDown,
  faLongArrowAltDown,
  faLongArrowAltUp,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IMargoCellTreeNode } from "../../../model/interfaces";
import Button from "../../common/Button";
import Collapsible from "../../common/Collapsible";
import CellWrapper from "../CellWrapper";
// import ParentCell from "../ParentCell/index.tsx-old";
import styles from "./CollapsibleCell.module.css";

export interface CollapsibleCellProps {
  node: IMargoCellTreeNode;
  handleAddCell: () => void;
  handleDeleteCell: () => void;
  handleMoveCellUp: () => void;
  handleMoveCellDown: () => void;
  handleToggleCellType: () => void;
  label: string;
}

const CollapsibleCell: React.FunctionComponent<CollapsibleCellProps> = (
  props: CollapsibleCellProps
) => {
  const {
    node,
    label,
    handleAddCell,
    handleDeleteCell,
    handleMoveCellDown,
    handleMoveCellUp,
    handleToggleCellType,
  } = props;

  return (
    <div className={styles.CollapsibleCell}>
      <div className={styles.Contents}>
        <Collapsible collapsedLabel={label}>
          <div className={styles.ControlsAndCellContainer}>
            <div className={styles.Controls}>
              <div className={styles.ControlsTop}>
                <Button
                  small
                  icon={<FontAwesomeIcon icon={faLongArrowAltUp} />}
                  onClick={handleMoveCellUp}
                />
                <Button
                  small
                  icon={<FontAwesomeIcon icon={faLongArrowAltDown} />}
                  onClick={handleMoveCellDown}
                />
              </div>
              <div className={styles.ControlsBottom}>
                <Button
                  small
                  onClick={handleAddCell}
                  icon={<FontAwesomeIcon icon={faPlus} />}
                />
              </div>
            </div>
            <div className={styles.CellFlexContainer}>
              <CellWrapper
                handleToggleCellType={handleToggleCellType}
                // handleAddcell={handleAddCell}
                handleDelete={handleDeleteCell}
                node={node}
              />
            </div>
          </div>
        </Collapsible>
      </div>
    </div>
  );
};

export default CollapsibleCell;
