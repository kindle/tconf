"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const path = require("path");
const vscode_1 = require("vscode");
const node_1 = require("vscode-languageclient/node");
let client;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations!!!, your extension "helloworld-sample" is now active!');
    vscode.window.showInformationMessage('Congratulations, your extension "helloworld-sample" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    const disposable = vscode.commands.registerCommand('extension.checkSyntax', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Bailin Hello World - check syntax!');
        // The server is implemented in node
        const serverModule = context.asAbsolutePath(path.join('', 'out', 'server.js'));
        // If the extension is launched in debug mode then the debug server options are used
        // Otherwise the run options are used
        const serverOptions = {
            run: { module: serverModule, transport: node_1.TransportKind.ipc },
            debug: {
                module: serverModule,
                transport: node_1.TransportKind.ipc,
            }
        };
        // Options to control the language client
        const clientOptions = {
            // Register the server for plain text documents
            documentSelector: [{ scheme: 'file', language: 'tconf' }],
            synchronize: {
                // Notify the server about file changes to '.clientrc files contained in the workspace
                fileEvents: vscode_1.workspace.createFileSystemWatcher('**/.clientrc')
            }
        };
        // Create the language client and start the client.
        client = new node_1.LanguageClient('languageServerExample', 'Language Server Example', null, //serverOptions,
        clientOptions);
        // Start the client. This will also launch the server
        client.start();
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function deactivate() {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map