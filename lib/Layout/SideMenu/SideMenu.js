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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const SideDrawer_1 = __importDefault(require("../SideDrawer/SideDrawer"));
const Svgs_1 = require("../../Svgs");
const SideMenu = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOptionClick = (e, option) => {
        e.stopPropagation();
        option.action();
        setOpen(false);
    };
    const _computeOptionClassName = (option) => {
        return option.active
            ? "sidemenu_option-active"
            : "sidemenu_option handsome_inverting";
    };
    const _renderOptions = () => {
        const { options } = props;
        return options.map((option, i) => (React.createElement("div", { onClick: (e) => handleOptionClick(e, option), className: _computeOptionClassName(option), key: `${option}_${i}` },
            React.createElement("div", { className: "sidemenu_option-content" }, option.name))));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "handsome_menu" },
            React.createElement(Svgs_1.BurgerMenu, { className: open ? "handsome_menu-icon-active" : "handsome_menu-icon", onClick: () => setOpen(true) })),
        React.createElement(SideDrawer_1.default, { onClose: () => setOpen(false), visible: open }, open && (React.createElement("div", { className: "sidemenu_container" },
            React.createElement("div", { className: "handsome_flex-center-col" }, _renderOptions()))))));
};
exports.default = SideMenu;
//# sourceMappingURL=SideMenu.js.map