import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import React, { useState } from "react";
import CollapserButton from "./CollapserButton";
import styles from "./Collapsible.module.css";

export interface CollapsibleProps {
  collapsedLabel: string;
  openLabel?: string;
  icon?: IconDefinition;
}

const Collapsible: React.FunctionComponent<CollapsibleProps> = (props) => {
  const [open, setOpen] = useState<boolean>(true);
  const { icon, collapsedLabel, children } = props;
  // const { collapsedLabel: label } = props;
  const label = collapsedLabel;
  return (
    <div
      className={`${styles.Collapsible} ${open ? styles.Open : styles.Closed}`}
    >
      <div className={styles.ControlArea}>
        <div className={styles.Top}>
          <CollapserButton
            icon={icon}
            open={open}
            onChange={() => setOpen(!open)}
          />
        </div>
        <div className={styles.Bottom}>
          <div className={styles.ConnectorEdge}>
            <div className={styles.ConnectorEdgeInner}></div>
          </div>
        </div>
      </div>
      <div className={styles.Contents}>
        <div className={styles.Label}>{label}</div>
        <div className={styles.ChildArea}>{children}</div>
      </div>
    </div>
  );
};

export default Collapsible;
