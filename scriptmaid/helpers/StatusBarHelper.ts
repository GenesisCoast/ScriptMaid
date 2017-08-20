import { StatusBarItem, window, StatusBarAlignment } from "vscode";

export class StatusBarHelper {
    
        private static _statusBarItem: StatusBarItem;
    
        public static show(message: string, align: StatusBarAlignment = StatusBarAlignment.Left) {
    
            // Create as needed
            if (!this._statusBarItem) {
                this._statusBarItem = window.createStatusBarItem(align);
            }
    
            // Get the current text editor
            let editor = window.activeTextEditor;
            if (!editor) {
                this._statusBarItem.hide();
                return;
            }
    
            // Update the status bar
            this._statusBarItem.text = message;
            this._statusBarItem.show();

            // Hide bar on editor change
            window.onDidChangeActiveTextEditor(e => {
                this._statusBarItem.hide();
            });
        }
    
        public static hide() {
            this._statusBarItem.hide();
        }
    
        static dispose() {
            this._statusBarItem.dispose();
        }
    }