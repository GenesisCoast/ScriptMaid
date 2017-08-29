import { IRule } from './models/IRule';
import { StatusBarHelper } from './helpers/StatusBarHelper';
import { CodeBlock } from './models/codeBlock';
import { StringHelper } from './helpers/StringHelper';
import { PsRules } from './rules/PsRules';
import { OrderCode } from './order';
import { FormatCode } from './format';

import {
    workspace, window, commands, Disposable, ExtensionContext, TextDocument, Range, TextEdit,
    Position, WorkspaceEdit
} from 'vscode';

// This method is called when your extension is activated. Activation is
// controlled by the activation events defined in package.json.
export function activate(context: ExtensionContext) {

    // const config = workspace.getConfiguration('scriptmaid');
    // config.get('', false)

    let document = window.activeTextEditor.document;

    context.subscriptions.push(
        commands.registerCommand('scriptmaid.formatActiveDoc', () => {
            let fc = new FormatCode(document.getText(), getLanguageRules());
            applyEdit(document, fc.format());
        }),
        commands.registerCommand('scriptmaid.orderActiveDoc', () => {
            let oc = new OrderCode(document.getText(), getLanguageRules());
            applyEdit(document, oc.order());
        })
    );

    workspace.onDidSaveTextDocument(e => {

    });

    workspace.onDidChangeTextDocument(e => {

    })
}

function applyEdit(vsDocument: TextDocument, newText: string) {
    let workspaceEdit = new WorkspaceEdit();
    workspaceEdit.replace(vsDocument.uri, getDocumentRange(vsDocument), newText);
    workspace.applyEdit(workspaceEdit);
}

function getDocumentRange(document: TextDocument): Range {
    const lastLineId = document.lineCount - 1;
    return new Range(0, 0, lastLineId, document.lineAt(lastLineId).text.length);
}

function getLanguageRules(): IRule {
    switch (window.activeTextEditor.document.languageId) {
        case "powershell":
            return new PsRules();
        default:
            return new PsRules();
    }
}
