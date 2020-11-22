import React from "react";
import styles from "./Button.module.css";

export interface ButtonProps {
  tooltipText?: string;
  labelText?: string;
  icon?: JSX.Element;
  onClick: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button className={styles.Button} onClick={props.onClick}>
      {props.icon}
      {props.labelText}
    </button>
  );
}
