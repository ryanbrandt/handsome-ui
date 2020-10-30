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
require("./index.css");
const Modal = (props) => {
    const topDivRef = React.createRef();
    const { open } = props;
    React.useEffect(() => {
        if (topDivRef && topDivRef.current) {
            topDivRef.current.scroll({ top: 0, behavior: "smooth" });
        }
    }, [open]);
    const renderHeading = () => {
        const { heading } = props;
        if (typeof heading === "string") {
            return (React.createElement("div", { className: "modal_modal_heading" },
                React.createElement("h1", null, heading)));
        }
        return heading;
    };
    const { onClose, children } = props;
    return (React.createElement("div", { className: `modal_container ${!open ? "modal_closed" : ""}`, onClick: () => onClose() },
        React.createElement("div", { ref: topDivRef, className: "modal_modal", onClick: (e) => e.stopPropagation() },
            React.createElement("div", { className: "modal_close", onClick: () => onClose() }, "close"),
            React.createElement("div", { className: "modal_inner" },
                renderHeading(),
                React.createElement("div", { className: "modal_modal_content" }, children)))));
};
exports.default = Modal;
//# sourceMappingURL=Modal.js.map