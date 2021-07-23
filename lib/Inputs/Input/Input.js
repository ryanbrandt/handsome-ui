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
const Containers_1 = require("../../Containers");
const helpers_1 = require("../../utils/helpers");
const Input = (props) => {
    const { iconLeft, error, disabled, className } = props;
    const _computeInputClassname = () => {
        const classes = [];
        if (className) {
            classes.push(className);
        }
        classes.push("input_input");
        if (iconLeft) {
            classes.push("input_input_icon_left");
        }
        if (disabled) {
            classes.push("input_input_disabled");
        }
        if (error) {
            classes.push("input_input_errored");
        }
        return classes.join(" ");
    };
    const _renderInput = () => {
        const { value, defaultValue, onChange, onBlur, placeholder, help, type, style, } = props;
        let valueProps = {};
        if (value !== undefined) {
            valueProps["value"] = value;
        }
        else if (defaultValue !== undefined) {
            valueProps["defaultValue"] = defaultValue;
        }
        return (React.createElement("div", { className: "input_input_wrapper" },
            iconLeft && React.createElement("span", { className: "input_icon_left" }, iconLeft),
            React.createElement("input", Object.assign({ className: _computeInputClassname(), style: style, type: type ? type : "text", placeholder: placeholder ? placeholder : undefined, onChange: onChange
                    ? (e) => onChange(e.currentTarget.value)
                    : () => null, onBlur: onBlur
                    ? (e) => onBlur(e.currentTarget.value)
                    : () => null }, valueProps)),
            help && React.createElement("span", { className: "input_help" }, help),
            error && React.createElement("span", { className: "input_error" }, error)));
    };
    const _renderInputContainer = (isMobile) => {
        const { containerClassName, containerStyle, label } = props;
        let className = "input_container";
        if (isMobile) {
            className = "input_container_mobile";
        }
        return (React.createElement("div", { className: helpers_1.combineClassNames(className, containerClassName), style: containerStyle },
            label && React.createElement("label", { className: "input_label" }, label),
            _renderInput()));
    };
    return (React.createElement(Containers_1.AppContext.Consumer, null, (isMobile) => _renderInputContainer(isMobile)));
};
exports.default = Input;
//# sourceMappingURL=Input.js.map