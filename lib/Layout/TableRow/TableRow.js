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
const React = __importStar(require("react"));
const helpers_1 = require("../../utils/helpers");
const TableRow = (props) => {
    const { children, onClick, darkened, disabled, className, style } = props;
    let classes = ["table_row"];
    if (onClick) {
        classes.push("table_row-clickable");
    }
    if (disabled) {
        classes.push("table_row-disabled");
    }
    if (darkened) {
        classes.push("table_row_darkened");
    }
    const baseClass = classes.join(" ");
    return (React.createElement("tr", { onClick: onClick ? () => onClick() : () => null, className: helpers_1.combineClassNames(baseClass, className), style: style }, children));
};
exports.default = TableRow;
//# sourceMappingURL=TableRow.js.map