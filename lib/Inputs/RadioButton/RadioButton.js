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
const helpers_1 = require("../../utils/helpers");
const RadioButton = (props) => {
    const _computeRadioButtonClass = () => {
        const { disabled, checked } = props;
        let classes = ["radio_button_standard"];
        if (checked) {
            classes.push("radio_button_checked");
        }
        if (disabled) {
            classes.push("radio_button_disabled");
        }
        return classes.join(" ");
    };
    const { onClick, disabled, label, className, style } = props;
    return (React.createElement("div", { className: "radio_button_container" },
        React.createElement("div", { className: helpers_1.combineClassNames(_computeRadioButtonClass(), className), style: style, onClick: () => onClick() }),
        label && (React.createElement("label", { className: `radio_button_label ${disabled ? "radio_button_disabled" : ""}` }, label))));
};
exports.default = RadioButton;
//# sourceMappingURL=RadioButton.js.map