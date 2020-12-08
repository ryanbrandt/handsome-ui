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
const helpers_1 = require("../../utils/helpers");
require("./index.css");
const Table = (props) => {
    const _renderHeader = (header, i) => {
        if (typeof header === "string") {
            return (React.createElement("th", { key: `table_header_${header}`, className: "table_header", align: "left" }, header));
        }
        return React.createElement("th", { key: `table_header_${i}` }, header);
    };
    const _renderTableHeaders = () => {
        const { headers } = props;
        return (React.createElement("thead", null,
            React.createElement("tr", { className: "table_row" }, headers.map((header, i) => _renderHeader(header, i)))));
    };
    const { children, className, style } = props;
    return (React.createElement("table", { className: helpers_1.combineClassNames("table_table`", className), style: style },
        _renderTableHeaders(),
        React.createElement("tbody", null, children)));
};
exports.default = Table;
//# sourceMappingURL=Table.js.map