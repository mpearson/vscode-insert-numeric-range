// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

function insertNumbers(initialValue: number, step: number) {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }

  // Sort selections by start position.
  const selections = Array.from(editor.selections);
  selections.sort((a, b) => (a.start.isAfter(b.start) ? 1 : -1));

  // Insert numbers.
  let currentValue = initialValue;
  editor.edit((editBuilder) => {
    selections.forEach((selection) => {
      editBuilder.replace(selection, currentValue.toString());
      currentValue += step;
    });
    return true;
  });
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "insert-numeric-range.insertNumericRange",
    async (initialValue?: number, step?: number) => {
      while (initialValue === undefined) {
        const textValue = await vscode.window.showInputBox({
          placeHolder: "Enter <start> or <start>:<step>",
        });
        if (textValue === "" || textValue === undefined) {
          initialValue = 0;
        } else {
          const chunks = textValue.split(":");
          if (chunks.length > 0) {
            initialValue = Number.parseInt(chunks[0], 10);
          }
          if (chunks.length > 1) {
            step = Number.parseInt(chunks[1], 10);
          }
        }
      }
      insertNumbers(initialValue, step ?? 1);
    },
  );
  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
