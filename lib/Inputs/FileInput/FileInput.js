"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TEST_ID = void 0;
const React = __importStar(require("react"));
exports.TEST_ID = "fileInput";
const FileInput = (props) => {
    const handleFileSelection = (e) => {
        const { onChange } = props;
        const { target } = e;
        const { files } = target;
        if (files) {
            const { length } = files;
            const fileList = [];
            for (let i = 0; i < length; i += 1) {
                fileList.push(files[i]);
            }
            onChange(fileList);
        }
    };
    const _getFileSelectionText = () => {
        const { selection } = props;
        let text = "No files selected";
        const selectionLength = selection.length;
        if (selectionLength > 0) {
            text = `${selectionLength} file(s) selected`;
        }
        return text;
    };
    const { label, multiple, accept, error } = props;
    return (React.createElement("div", { "data-testid": exports.TEST_ID, className: "file_input-container" },
        label && React.createElement("p", { className: "file_input-label" }, label),
        React.createElement("label", { className: "file_input-wrapper" },
            "Choose Files",
            React.createElement("input", { className: "file_input-hidden", type: "file", onChange: handleFileSelection, multiple: multiple, accept: accept })),
        React.createElement("p", null, _getFileSelectionText()),
        error && React.createElement("span", { className: "file_input-error" }, error)));
};
exports.default = FileInput;
//# sourceMappingURL=FileInput.js.map