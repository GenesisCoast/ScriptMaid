import { CodeBlock } from './models/codeBlock';
import { StringUtils } from './utils/stringUtils';
import { PsRules } from './rules/psRules';
import { OrderCode } from './logic/orderCode';
import { FormatCode } from './logic/formatCode';

// The module 'vscode' contains the VS Code extensibility API
// Import the necessary extensibility types to use in your code below
import {
    workspace, window, commands, Disposable, ExtensionContext, StatusBarAlignment,
    StatusBarItem, TextDocument, DocumentFormattingEditProvider, Range, TextEdit, Position
} from 'vscode';

// This method is called when your extension is activated. Activation is
// controlled by the activation events defined in package.json.
export function activate(context: ExtensionContext) {

    console.log('Congratulations, your extension "WordCount" is now active!');

    const config = workspace.getConfiguration('codemaid') as any;

    let document = window.activeTextEditor.document;

    let ps = new PsRules().rules;

    let cad = commands.registerCommand('extension.formatActiveDoc', () => {
        FormatCode.format(document.getText());
    });
    let rad = commands.registerCommand('extension.orderActiveDoc', () => {
        orderActiveDoc();
    });

    // Add to a list of disposables which are disposed when this extension is deactivated.
    context.subscriptions.push(cad);
    context.subscriptions.push(rad);
}


function orderActiveDoc() {
    let document = window.activeTextEditor.document;
    
    let blocks = OrderCode.matchCodeBlocks(document.getText(), /function\s(\w+)\(.*\)\s*.*{/g);
    let sortedBlocks = CodeBlock.sortByName(blocks);
    let result = CodeBlock.buildCode(blocks);

    TextEdit.replace(
        fullDocumentRange(document),
        result
    );
}


function fullDocumentRange(document: TextDocument): Range {
    const lastLineId = document.lineCount - 1;
    return new Range(0, 0, lastLineId, document.lineAt(lastLineId).text.length);
}


  




