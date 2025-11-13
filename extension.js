const vscode = require('vscode');

function activate(context) {
    let command = vscode.commands.registerTextEditorCommand(
        'insert-timestamp.insert',
        (editor, edit) => {
            const now = new Date();
            const timestamp = now.toISOString().replace('T', ' ').substring(0, 19);
            editor.insertSnippet(new vscode.SnippetString(timestamp));
        }
    );

    context.subscriptions.push(command);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
