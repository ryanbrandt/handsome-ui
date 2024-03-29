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
const hooks_1 = require("../../hooks");
const SideDrawer = (props) => {
    const isMobile = hooks_1.useIsMobile();
    const { visible, onClose } = props;
    const handleForegroundClick = (e) => {
        e.stopPropagation();
        if (onClose) {
            onClose();
        }
    };
    const _computeDrawerClassName = () => {
        const { side } = props;
        let drawerClassName = "side_drawer-drawer-hidden";
        if (visible) {
            let mobileModifier = "";
            if (isMobile) {
                mobileModifier = "-mobile";
            }
            drawerClassName = `side_drawer-drawer${mobileModifier} handsome_scroll`;
        }
        let sideModifier = "drawer-left";
        if (side) {
            sideModifier = `drawer-${side}`;
        }
        return `${drawerClassName} ${sideModifier}`;
    };
    const _renderCloseButton = () => {
        if (onClose && visible) {
            return (React.createElement("div", { onClick: () => onClose(), className: "side_drawer-close-btn" }, "X"));
        }
        return null;
    };
    const { children } = props;
    let containerClassName = "side_drawer-container-hidden";
    if (visible) {
        containerClassName = "side_drawer-container";
    }
    const foregroundClickFn = visible ? handleForegroundClick : undefined;
    return (React.createElement("div", { onClick: foregroundClickFn, className: containerClassName },
        React.createElement("div", { className: _computeDrawerClassName() },
            _renderCloseButton(),
            children)));
};
exports.default = SideDrawer;
//# sourceMappingURL=SideDrawer.js.map