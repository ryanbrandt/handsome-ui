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
const helpers_1 = require("../../utils/helpers");
require("./index.css");
const Select = (props) => {
    const { options, value, onChange, label, error, containerClasses } = props;
    const getSelectClasses = () => {
        const { selectClasses, disabled } = props;
        const classes = ["select_select"];
        if (disabled) {
            classes.push("select_select_disabled");
        }
        return helpers_1.combineClassNames(classes.join(" "), selectClasses);
    };
    return (React.createElement("div", { className: helpers_1.combineClassNames("select_select", containerClasses) },
        label && React.createElement("label", { className: "select_label" }, label),
        React.createElement("select", { value: value, className: getSelectClasses(), onChange: (e) => onChange(e.currentTarget.value) },
            React.createElement("option", { value: "" }, "--"),
            options.map((option, i) => {
                let listOption;
                if (typeof option === "string") {
                    listOption = (React.createElement("option", { key: `${option}_${i}`, value: option }, option));
                }
                else if (typeof option === "object" &&
                    "label" in option &&
                    "value" in option) {
                    listOption = (React.createElement("option", { key: `${option.value}_${i}`, value: option.value }, option.label));
                }
                return listOption;
            })),
        error && React.createElement("span", { className: "select_error" }, error)));
};
exports.default = Select;
//# sourceMappingURL=Select.js.map