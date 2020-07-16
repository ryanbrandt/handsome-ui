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
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Containers_1 = require("../../Containers/");
require("./index.css");
const Badge = (props) => {
    const _renderContent = () => {
        const { content } = props;
        if (typeof content === "string") {
            return React.createElement("div", { className: "bagde_text_content" }, content);
        }
        return content;
    };
    const _renderBadge = (isMobile) => {
        const { className, style } = props;
        let baseClass = "badge_badge";
        if (isMobile) {
            // TODO
        }
        return (React.createElement("div", { className: `${className ? `${className} ` : ""}${baseClass}`, style: style }, _renderContent()));
    };
    return (React.createElement(Containers_1.AppContext.Consumer, null, (isMobile) => _renderBadge(isMobile)));
};
exports.default = Badge;
//# sourceMappingURL=Badge.js.map