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
const Elements_1 = require("../../Elements");
exports.TEST_ID = "loadingOverlay";
const LoadingOverlay = (props) => {
    const { show, message, fade } = props;
    let additionalStyles = "";
    if (fade) {
        additionalStyles = "fadeable-content";
    }
    return (React.createElement("div", { "data-testid": exports.TEST_ID, className: `loading_overlay-container ${show ? "revealed" : "hidden"} ${additionalStyles}` },
        React.createElement("div", { className: "loading_overlay-content" },
            React.createElement(Elements_1.Spinner, null),
            message && React.createElement("h2", null, message))));
};
exports.default = LoadingOverlay;
//# sourceMappingURL=LoadingOverlay.js.map