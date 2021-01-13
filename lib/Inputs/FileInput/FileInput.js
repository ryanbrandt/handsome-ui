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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
require("./index.css");
const FileInput = (props) => {
    const [selectedFiles, setSelectedFiles] = React.useState(new Array());
    const _handleFileSelection = (e) => {
        const { onChange } = props;
        const { target } = e;
        const castedTarget = target;
        if (castedTarget.files) {
            const { files } = castedTarget;
            const fileList = Object.keys(files).map((key) => files[key]);
            setSelectedFiles(fileList);
            onChange(fileList);
        }
    };
    const { label, multiple, accept, error } = props;
    return (React.createElement("div", { className: "file_input-container" },
        label && React.createElement("p", { className: "file_input-label" }, label),
        React.createElement("label", { className: "file_input-wrapper" },
            "Choose Files",
            React.createElement("input", { className: "file_input-hidden", type: "file", onChange: _handleFileSelection, multiple: multiple, accept: accept })),
        React.createElement("p", null, selectedFiles.length > 0
            ? `${selectedFiles.length} files selected`
            : "No files selected"),
        error && React.createElement("span", { className: "file_input-error" }, error)));
};
exports.default = FileInput;
//# sourceMappingURL=FileInput.js.map