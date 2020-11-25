import {
  faChevronRight,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./CollapserButton.module.css";
export interface CollapserButtonProps {
  onChange: () => void;
  open: boolean;
  icon?: IconDefinition;
}

export default function CollapserButton(props: CollapserButtonProps) {
  const { onChange, open } = props;
  const icon = props.icon || faChevronRight;
  return (
    <div
      onClick={onChange}
      className={`${styles.CollapserButton} ${
        open ? styles.Open : styles.Closed
      }`}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}
