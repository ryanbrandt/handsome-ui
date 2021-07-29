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
const Svgs_1 = require("../../Svgs");
const Layout_1 = require("../../Layout");
const MobileHeader = (props) => {
    const { options, onItemClick } = props;
    const [menuOpen, setMenuOpen] = React.useState(false);
    const _renderMobileItems = () => {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "app_mobile-escape", onClick: () => setMenuOpen(false) }, "X"),
            React.createElement("div", { className: "app_mobile-content" },
                React.createElement(Layout_1.Column, null, options.map((option) => !option.active && (React.createElement("h1", { key: option.name, onClick: () => onItemClick(option, () => setMenuOpen(false)) }, option.name)))))));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "app_header app_header-mobile" },
            React.createElement("div", { className: "app_mobile_icon" },
                React.createElement(Svgs_1.BurgerMenu, { onClick: () => setMenuOpen(true) }))),
        React.createElement("div", { className: `app_mobile_menu ${menuOpen ? "open" : "closed"}` }, _renderMobileItems())));
};
exports.default = MobileHeader;
//# sourceMappingURL=MobileHeader.js.map