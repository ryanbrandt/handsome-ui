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
const Breadcrumbs = (props) => {
    const { crumbs } = props;
    if (crumbs.length > 0) {
        return (React.createElement("div", { "data-testid": "breadcrumbs", className: "breadcrumb-container" }, crumbs.map(({ title, disabled = false, action = () => null }, i) => (React.createElement(React.Fragment, { key: `${title}_${i}` },
            i !== 0 && React.createElement("div", { className: "breadcrumb-divider" }, "/"),
            React.createElement("div", { className: `breadcrumb-crumb ${disabled ? "disabled" : ""}`, onClick: disabled ? () => null : () => action() }, title))))));
    }
    return null;
};
exports.default = Breadcrumbs;
//# sourceMappingURL=Breadcrumbs.js.map