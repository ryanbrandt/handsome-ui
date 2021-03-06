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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RowVersionOptions = void 0;
const React = __importStar(require("react"));
const Column_1 = __importDefault(require("../Column/Column"));
const Containers_1 = require("../../Containers");
require("./index.css");
var RowVersionOptions;
(function (RowVersionOptions) {
    RowVersionOptions[RowVersionOptions["default"] = 0] = "default";
    RowVersionOptions[RowVersionOptions["space-between"] = 1] = "space-between";
    RowVersionOptions[RowVersionOptions["space-evenly"] = 2] = "space-evenly";
})(RowVersionOptions = exports.RowVersionOptions || (exports.RowVersionOptions = {}));
const Row = (props) => {
    const { children } = props;
    const _getVersionClassName = (version) => {
        switch (version) {
            case RowVersionOptions.default: {
                return "row";
            }
            case RowVersionOptions["space-between"]: {
                return "row_space-between";
            }
            case RowVersionOptions["space-evenly"]: {
                return "row_space-evenly";
            }
            default: {
                return "row";
            }
        }
    };
    const _renderMobileRow = () => {
        const { mobileClassName, mobileStyle } = props;
        return (React.createElement(Column_1.default, { className: mobileClassName, style: mobileStyle }, children));
    };
    const _renderRow = () => {
        const { className, style, version = RowVersionOptions["space-between"], } = props;
        return (React.createElement("div", { className: `${className ? `${className} ` : ""}${_getVersionClassName(version)}`, style: style }, children));
    };
    return (React.createElement(Containers_1.AppContext.Consumer, null, (isMobile) => (isMobile ? _renderMobileRow() : _renderRow())));
};
exports.default = Row;
//# sourceMappingURL=Row.js.map