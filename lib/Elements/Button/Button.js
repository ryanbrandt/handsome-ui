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
require("./index.css");
const Button = (props) => {
    const getButtonClass = () => {
        const { inverting, round, disabled, className } = props;
        let classes = className
            ? [className, "buton_common"]
            : ["button_common"];
        if (inverting) {
            classes.push("button_inverting");
        }
        if (round) {
            classes.push("button_round");
        }
        if (disabled) {
            classes.push("button_disabled");
        }
        return classes.join(" ");
    };
    const { title, onClick, icon, style } = props;
    return (React.createElement("div", { className: getButtonClass(), onClick: () => onClick(), style: style ? style : {} },
        React.createElement("div", { className: "button_content" },
            icon && React.createElement("div", { className: "button_icon" }, icon),
            React.createElement("span", null, title))));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map