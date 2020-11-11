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
const Containers_1 = require("../../Containers");
const Svgs_1 = require("../../Svgs");
const Layout_1 = require("../../Layout");
require("./index.css");
const Header = (props) => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const _handleMobileClick = (item) => {
        const { onMobileClick } = props;
        onMobileClick(item);
        setMobileMenuOpen(false);
    };
    const _renderMobileItems = () => {
        const { mobileMenu } = props;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "app_mobile-escape", onClick: () => setMobileMenuOpen(false) }, "X"),
            React.createElement("div", { className: "app_mobile-content" },
                React.createElement(Layout_1.Column, null, mobileMenu.map((item) => (React.createElement("h1", { key: item, onClick: () => _handleMobileClick(item) }, item)))))));
    };
    const _renderMobileMenu = () => {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "app_header app_header-mobile" },
                React.createElement("div", { className: "app_mobile_icon" },
                    React.createElement(Svgs_1.BurgerMenu, { onClick: () => setMobileMenuOpen(true) }))),
            React.createElement("div", { className: `app_mobile_menu ${mobileMenuOpen ? "open" : "closed"}` }, _renderMobileItems())));
    };
    const { menu } = props;
    return (React.createElement(Containers_1.AppContext.Consumer, null, (isMobile) => isMobile ? (_renderMobileMenu()) : (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "app_header" }, menu)))));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map