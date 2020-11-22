import React from "react";
import styles from "./ControlBar.module.css";
export interface ControlBarProps {}

const ControlBar: React.FunctionComponent<ControlBarProps> = (props) => {
  return <div className={styles.ControlBar}>{props.children}</div>;
};

export default ControlBar;
