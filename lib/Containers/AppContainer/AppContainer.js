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
const hooks_1 = require("../../hooks");
const contexts_1 = require("../../contexts");
const AppContainer = (props) => {
    const { children, header, className, style, additionalContext = {} } = props;
    const debouncedWindowSize = hooks_1.useDebounce(hooks_1.useWindowSize());
    const isMobile = hooks_1.useIsMobile();
    return (React.createElement(contexts_1.AppContext.Provider, { value: Object.assign({ windowSize: debouncedWindowSize, isMobile: isMobile }, additionalContext) },
        header,
        React.createElement("div", { className: className, style: style }, children)));
};
exports.default = AppContainer;
//# sourceMappingURL=AppContainer.js.map