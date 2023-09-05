"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-empty */
/* eslint-disable no-mixed-spaces-and-tabs */
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
const node_1 = require("vscode-languageserver/node");
const vscode_languageserver_textdocument_1 = require("vscode-languageserver-textdocument");
const doc_1 = require("./doc");
// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = (0, node_1.createConnection)(node_1.ProposedFeatures.all);
// Create a simple text document manager.
const documents = new node_1.TextDocuments(vscode_languageserver_textdocument_1.TextDocument);
let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;
connection.onInitialize((params) => {
    const capabilities = params.capabilities;
    // Does the client support the `workspace/configuration` request?
    // If not, we fall back using global settings.
    hasConfigurationCapability = !!(capabilities.workspace && !!capabilities.workspace.configuration);
    hasWorkspaceFolderCapability = !!(capabilities.workspace && !!capabilities.workspace.workspaceFolders);
    hasDiagnosticRelatedInformationCapability = !!(capabilities.textDocument &&
        capabilities.textDocument.publishDiagnostics &&
        capabilities.textDocument.publishDiagnostics.relatedInformation);
    const result = {
        capabilities: {
            textDocumentSync: node_1.TextDocumentSyncKind.Incremental,
            // Tell the client that this server supports code completion.
            completionProvider: {
                resolveProvider: true
            },
            hoverProvider: true,
            documentFormattingProvider: true,
            definitionProvider: true,
        }
    };
    if (hasWorkspaceFolderCapability) {
        result.capabilities.workspace = {
            workspaceFolders: {
                supported: true
            }
        };
    }
    return result;
});
/*
connection.onDefinition((params): DefinitionLink[] => {
    return [{
        targetUri: params.textDocument.uri,
        targetRange: { start: { line: 0, character: 2}, end: {line: 5, character: 45 } },
        targetSelectionRange: { start: { line: 1, character: 5}, end: {line: 1, character: 10 } },
        originSelectionRange: {
            start: { line: params.position.line, character: Math.max(0, params.position.character - 4) },
            end: { line: params.position.line, character: params.position.character + 4 }
        }
    }];
});*/
connection.onDefinition((params) => {
    return [{
            targetUri: params.textDocument.uri,
            targetRange: { start: { line: 0, character: 2 }, end: { line: 5, character: 45 } },
            targetSelectionRange: { start: { line: 1, character: 5 }, end: { line: 1, character: 10 } },
            originSelectionRange: {
                start: { line: params.position.line, character: Math.max(0, params.position.character - 4) },
                end: { line: params.position.line, character: params.position.character + 4 }
            }
        }];
});
connection.onHover((params) => {
    const hoverWord = getSymbolAtPosition(params.position, params.textDocument.uri);
    return Promise.resolve({
        //contents: ["Bailin Hover Tips for:"+JSON.stringify(params),"hover details"+hoverWord],
        contents: getDoc(hoverWord) == hoverWord ? [] : [getDoc(hoverWord)],
    });
});
const TokenSeparatorsXML = /[\t= <>"]/;
function getSymbolAtPosition(position, documentUri) {
    const range = {
        start: { line: position.line, character: 0 },
        end: { line: position.line, character: Number.MAX_VALUE }
    };
    //get the whole line 
    const txtDoc = documents.get(documentUri);
    const context = txtDoc.getText(range);
    const offset = position.character;
    let start = offset - 1;
    while ((start > 0) && !context[start].match(TokenSeparatorsXML)) {
        start--;
    }
    let end = offset;
    while ((end < context.length) && !context[end].match(TokenSeparatorsXML)) {
        end++;
    }
    const symbol = context.substr(start + 1, end - start - 1);
    console.log(`${start}->${end}- symbol: ${symbol}`);
    return symbol;
}
connection.onDocumentFormatting((params) => {
    const { textDocument } = params;
    const doc = documents.get(textDocument.uri);
    const text = doc.getText();
    const pattern = /\b[A-Z]{3,}\b/g;
    let match;
    const res = [];
    // find upper case strings
    while ((match = pattern.exec(text))) {
        res.push({
            range: {
                start: doc.positionAt(match.index),
                end: doc.positionAt(match.index + match[0].length),
            },
            // replace upper case strings to Camel
            newText: match[0],
            //newText: match[0].replace(/(?<=[A-Z])[A-Z]+/, (r) => r.toLowerCase()),
        });
    }
    return Promise.resolve(res);
});
connection.onInitialized(() => {
    if (hasConfigurationCapability) {
        // Register for all configuration changes.
        connection.client.register(node_1.DidChangeConfigurationNotification.type, undefined);
    }
    if (hasWorkspaceFolderCapability) {
        connection.workspace.onDidChangeWorkspaceFolders(_event => {
            connection.console.log('Workspace folder change event received.');
        });
    }
    initKeywords();
});
// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings = { maxNumberOfProblems: 1000 };
let globalSettings = defaultSettings;
// Cache the settings of all open documents
const documentSettings = new Map();
connection.onDidChangeConfiguration(change => {
    if (hasConfigurationCapability) {
        // Reset all cached document settings
        documentSettings.clear();
    }
    else {
        globalSettings = ((change.settings.tconf || defaultSettings));
    }
    // Revalidate all open text documents
    documents.all().forEach(validateTextDocument);
});
function getDocumentSettings(resource) {
    if (!hasConfigurationCapability) {
        return Promise.resolve(globalSettings);
    }
    let result = documentSettings.get(resource);
    if (!result) {
        result = connection.workspace.getConfiguration({
            scopeUri: resource,
            section: 'tconf'
        });
        documentSettings.set(resource, result);
    }
    return result;
}
// Only keep settings for open documents
documents.onDidClose(e => {
    documentSettings.delete(e.document.uri);
});
// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
    validateTextDocument(change.document);
});
async function validateTextDocument(textDocument) {
    // In this simple example we get the settings for every validate run.
    const settings = await getDocumentSettings(textDocument.uri);
    // The validator creates diagnostics for all uppercase words length 2 and more
    const text = textDocument.getText();
    const pattern = /\bmap((.+?):[ ]{0,}[A-Za-z]{1,})\b/g;
    let m;
    let problems = 0;
    const diagnostics = [];
    while ((m = pattern.exec(text)) && problems < settings.maxNumberOfProblems) {
        problems++;
        const diagnostic = {
            severity: node_1.DiagnosticSeverity.Error,
            range: {
                start: textDocument.positionAt(m.index),
                end: textDocument.positionAt(m.index + m[0].length)
            },
            message: `${m[0]}: string value in map must use quotes, example: {1:"ASK"})`,
            source: 'ex'
        };
        if (hasDiagnosticRelatedInformationCapability) {
            diagnostic.relatedInformation = [
                {
                    location: {
                        uri: textDocument.uri,
                        range: Object.assign({}, diagnostic.range)
                    },
                    message: 'Spelling matters'
                },
                {
                    location: {
                        uri: textDocument.uri,
                        range: Object.assign({}, diagnostic.range)
                    },
                    message: 'Particularly for names'
                }
            ];
        }
        diagnostics.push(diagnostic);
    }
    // Send the computed diagnostics to VSCode.
    connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}
connection.onDidChangeWatchedFiles(_change => {
    // Monitored files have change in VSCode
    connection.console.log('We received an file change event');
});
// This handler provides the initial list of the completion items.
connection.onCompletion((_textDocumentPosition) => {
    // The pass parameter contains the position of the text document in
    // which code complete got requested. For the example we ignore this
    // info and always provide the same completion items.
    return keywordMapping;
});
// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve((item) => {
    const data = documentMap.get(item.data);
    if (data) {
        item.detail = data.detail;
        item.documentation = data.documentation;
    }
    return item;
});
// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);
// Listen on the connection
connection.listen();
// below are document for tconf
const keywordMapping = [];
function initKeywords() {
    const constantKeywords = "Blank|import|true|false|alias|absent|GMTDate|GMTTime|GMTDateTime";
    const transformKeywords = "SetReal|real|insert_rank|get_rank|add_row|add_to_index|bts_add|bts_clear|bts_find|bts_get_high_trade|bts_get_last_trade|bts_get_low_trade|bts_get_most_recent_trade|bts_get_open_trade|bts_get_trade_prices|bts_get_trade_keys|bts_get_trade_times|bts_get_trade_volumes|bts_remove|bts_update|clear_book|convert_date|convert_datetime|convert_string_to_fixedreal|convert_to_uint64|convert_time|is_utf8|convert_utf8_to_chn_gbk|convert_utf8_to_iso2022c|convert_utf8_to_iso2022j|create_pub_repeating_group|create_publication|date_to_string|delete_unwanted_index_bottom|delete_unwanted_index_top|delete_unwanted_rows|exists|find|flush_location|get_current_hires_time|get_current_hires_time_in_milliseconds|get_date_day|get_date_month|get_date_year|get_index_bottom|get_index_top|get_milliseconds_since_midnight|get_nanoseconds_since_midnight|get_prev_exch_trading_day|get_n_exchange_trading_day|get_n_calendar_day|get_real_base|get_real_exponent|get_row|hkfe_apply_market_status|hkfe_clear_market_status|hkfe_get_market_status|init_parent_identifier|init_leg_identifier|add_to_state_table|get_active_state|get_active_tss|get_active_iss|clear_state_table|Split|ignore|isAlpha|isDigit|keep_row|len|log_critical|log_info|log_warn|map|print|remove_row|rescale|ripple|strtime|str2date|substr|time_from_micros_since_midnight|time_from_millis_since_midnight|time_from_nanos_since_midnight|time_from_seconds_since_midnight|to_string|trim|date_diff_days|convert_from_gmt|convert_to_gmt|publication_has_summary|publication_has_row|to_int|to_real";
    constantKeywords.split('|').forEach(k => {
        keywordMapping.push({
            label: k,
            kind: node_1.CompletionItemKind.Constant,
            data: 1
        });
    });
    transformKeywords.split('|').forEach(k => {
        keywordMapping.push({
            label: k,
            kind: node_1.CompletionItemKind.Function,
            data: k
        });
    });
}
function getDoc(input) {
    let keyWord = input.replace("#", "");
    const index = keyWord.indexOf('(');
    if (index > -1) {
        keyWord = keyWord.substring(0, index);
    }
    const content = documentMap.get(keyWord.trim());
    if (content) {
        return content.documentation;
    }
    return input;
}
const documentMap = new Map();
documentMap.set("1", {
    detail: "Constant",
    documentation: ``
});
doc_1.DocData.metaData.forEach((m) => {
    let doc = `
${m.name}

${m.description}

Tags: ${m.tags.join(', ')}

${m.functionSignature}

`;
    m.parameters.forEach((p) => {
        p.split('\n').forEach((pp, index) => {
            doc += (index > 0 ? `    ` : `  •  `) + pp;
            doc += index > 0 ? "" : `

`;
        });
        doc += `

`;
    });
    documentMap.set(m.name, {
        detail: "",
        documentation: doc
    });
});
//# sourceMappingURL=server.js.map