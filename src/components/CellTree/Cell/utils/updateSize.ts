import * as monaco from "monaco-editor";

export default function updateSize(
    el: HTMLDivElement,
    editor: monaco.editor.IStandaloneCodeEditor
) {
    editor.layout({
        width: el.clientWidth,
        height: editor.getContentHeight(),
    });
}
