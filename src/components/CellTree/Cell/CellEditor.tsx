import { ICellModel } from "@jupyterlab/cells";
import Measure from "react-measure";

import React, { RefObject, useEffect, useRef, useState } from "react";
import * as monaco from "monaco-editor";
import getNewEditor, { updateSize } from "./utils/getNewEditor";

export interface CellEditorProps {
  cell: ICellModel;
  updateText: (text: string) => void;
}

export default function CellEditor(props: CellEditorProps) {
  const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor>();
  const ref: RefObject<HTMLDivElement> = useRef(null);
  const [width, setWidth] = useState<number>(-1);

  const { cell, updateText } = props;

  useEffect(() => {
    if (!ref.current) return;

    console.log("Creating a new editor with text", cell.value.text);
    // create a new editor
    const current = ref.current;
    const newEditor = getNewEditor(
      ref.current,
      cell.value.text,
      cell.metadata.get("language")?.toString() || "python-x",
      () => {
        const editorText = newEditor.getValue().toString();
        // updateText(editorText);
        props.cell.value.text = editorText;
        updateSize(current, newEditor);
      }
    );
    setEditor(newEditor);

    return () => {
      current.innerHTML = "";
      // TODO - evaluate this cleanup routine. Esepcially unsetting the editor
      setEditor(undefined);
    };
  }, [ref]);

  /**
   * Auto-update the width
   */
  useEffect(() => {
    if (!ref.current) return;
    if (!editor) return;
    updateSize(ref.current, editor);
  }, [ref, width, editor]);

  return (
    <Measure
      bounds
      onResize={(contentRect) => {
        console.log("resize captured", contentRect);
        if (contentRect.bounds) {
          setWidth(contentRect.bounds?.width);
        }
      }}
    >
      {({ measureRef }) => (
        <div ref={measureRef}>
          <div ref={ref}></div>
        </div>
      )}
    </Measure>
  );
}
