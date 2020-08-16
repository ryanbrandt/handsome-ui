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
require("./index.css");
const Text = (props) => {
    const _renderText = () => {
        const { value, defaultValue, onChange, onBlur, placeholder, className, style, error, disabled, } = props;
        let valueProps = {};
        if (value !== undefined) {
            valueProps["value"] = value;
        }
        else if (defaultValue !== undefined) {
            valueProps["defaultValue"] = defaultValue;
        }
        let classes = ["text_text"];
        if (error) {
            classes.push("text_text_errored");
        }
        if (disabled) {
            classes.push("text_text_disabled");
        }
        const baseClass = classes.join(" ");
        return (React.createElement("textarea", Object.assign({ placeholder: placeholder, className: `${className ? `${className} ` : ""}${baseClass}`, style: style, onChange: onChange
                ? (e) => onChange(e.currentTarget.value)
                : () => null, onBlur: onBlur
                ? (e) => onBlur(e.currentTarget.value)
                : () => null, disabled: disabled }, valueProps)));
    };
    const _renderTextContainer = (isMobile) => {
        const { label, help, error, containerClassName, containerStyle } = props;
        let className = "text_container";
        if (isMobile) {
            className = "text_container_mobile";
        }
        return (React.createElement("div", { className: `${containerClassName ? `${containerClassName} ` : ""}${className}`, style: containerStyle },
            label && React.createElement("label", { className: "text_label" }, label),
            _renderText(),
            help && React.createElement("label", { className: "text_help" }, help),
            error && React.createElement("label", { className: "text_error" }, error)));
    };
    return (React.createElement(Containers_1.AppContext.Consumer, null, (isMobile) => _renderTextContainer(isMobile)));
};
exports.default = Text;
//# sourceMappingURL=Text.js.map