import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { RefObject, useRef, useState } from "react";
import Button from "../../common/Button";
import styles from "./EditableCellLabel.module.css";

export interface EditableCellLabelProps {
  text: string;
  onChange: (text: string) => void;
}

export default function EditableCellLabel(props: EditableCellLabelProps) {
  const { text, onChange } = props;
  const labelRef: RefObject<HTMLDivElement> = useRef(null);
  const [editMode, setEditMode] = useState<boolean>(false);

  return (
    <div
      //   onClick={function () {
      //     labelRef.current?.focus();
      //     if (editMode) {
      //       labelRef.current?.blur();
      //     }
      //     setEditMode(!editMode);
      //   }}
      className={styles.EditableCellLabel}
    >
      <span className={styles.ButtonContainer}>
        <FontAwesomeIcon icon={faEdit} />
        {/* <Button
          onClick={function () {
            labelRef.current?.focus();
            if (editMode) {
              labelRef.current?.blur();
            }
            setEditMode(!editMode);
          }}
          icon={<FontAwesomeIcon icon={faEdit} />}
        ></Button> */}
      </span>
      <span
        onKeyUp={(e: React.KeyboardEvent<HTMLSpanElement>) => {
          onChange(labelRef.current?.innerText || "");
        }}
        ref={labelRef}
        className={`${styles.Label} ${editMode ? styles.Highlight : ""}`}
        contentEditable
      >
        {text}
      </span>
      {/* {editMode ? (
        <input
          placeholder={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value);
          }}
        ></input>
      ) : (
        <span contentEditable={editMode}>{text}</span>
      )} */}
    </div>
  );
}
