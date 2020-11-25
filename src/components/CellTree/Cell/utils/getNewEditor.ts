import * as monaco from "monaco-editor";

export function updateSize(
    el: HTMLDivElement,
    editor: monaco.editor.IStandaloneCodeEditor
) {
    editor.layout({
        width: el.clientWidth,
        height: editor.getContentHeight(),
    });
}

export default function getNewEditor(el: HTMLDivElement, initialValue?: string, language?: string, handleUpdates?: (e: monaco.editor.IModelContentChangedEvent) => void) {
    const newEditor = monaco.editor.create(
        el,
        {
            // value: props.cellModel.value.text,
            value: initialValue || "",
            language:
                language || "python",
            glyphMargin: false,
            scrollbar: {
                vertical: "hidden",
                handleMouseWheel: false,
            },
            lineNumbers: "off",
            fontSize: 19,
            scrollBeyondLastLine: false,
            minimap: {
                enabled: false,
            },
        });


    // set the initial
    updateSize(el, newEditor);

    if (handleUpdates) {
        newEditor.onDidChangeModelContent(handleUpdates)

    }

    return newEditor;
}