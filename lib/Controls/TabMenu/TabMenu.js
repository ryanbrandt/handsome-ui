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
const React = __importStar(require("react"));
const AppContext_1 = __importDefault(require("../../Containers/AppContainer/AppContext"));
const Inputs_1 = require("../../Inputs");
const Svgs_1 = require("../../Svgs");
const Layout_1 = require("../../Layout");
const Containers_1 = require("../../Containers");
require("./index.css");
const TabMenu = (props) => {
    const { tabs } = props;
    const _handleTabChange = (tabKey) => {
        const { onTab } = props;
        onTab(tabKey);
    };
    const _renderTabs = () => {
        return tabs.map((tab) => (React.createElement("div", { className: tab.active ? "tab_menu_tab-active" : "tab_menu_tab", key: tab.title, onClick: () => _handleTabChange(tab.key) }, tab.title)));
    };
    const _renderMobileTabs = () => {
        return (React.createElement("div", { className: "tab_menu-dropdown-container" },
            React.createElement(Containers_1.Dropdown, { heading: "Filter By" },
                React.createElement(Layout_1.Column, { className: "tab_menu-mobile-container" }, _renderTabs()))));
    };
    const { onSearch } = props;
    return (React.createElement(AppContext_1.default.Consumer, null, (isMobile) => (React.createElement(Layout_1.Row, null,
        React.createElement("div", null, isMobile ? _renderMobileTabs() : _renderTabs()),
        React.createElement(Inputs_1.Input, { placeholder: "Search", onChange: onSearch, iconLeft: React.createElement(Svgs_1.Search, { width: 12, height: 12 }) })))));
};
exports.default = TabMenu;
//# sourceMappingURL=TabMenu.js.map