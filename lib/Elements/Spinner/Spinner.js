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
exports.TEST_ID = void 0;
const React = __importStar(require("react"));
const helpers_1 = require("../../utils/helpers");
exports.TEST_ID = "spinner";
const Spinner = (props) => {
    const { className } = props;
    const containerClassName = helpers_1.combineClassNames("spinner-circle", className);
    return (React.createElement("div", { "data-testid": exports.TEST_ID, className: containerClassName },
        React.createElement("div", { className: "spinner-circle1 spinner-child" }),
        React.createElement("div", { className: "spinner-circle2 spinner-child" }),
        React.createElement("div", { className: "spinner-circle3 spinner-child" }),
        React.createElement("div", { className: "spinner-circle4 spinner-child" }),
        React.createElement("div", { className: "spinner-circle5 spinner-child" }),
        React.createElement("div", { className: "spinner-circle6 spinner-child" }),
        React.createElement("div", { className: "spinner-circle7 spinner-child" }),
        React.createElement("div", { className: "spinner-circle8 spinner-child" }),
        React.createElement("div", { className: "spinner-circle9 spinner-child" }),
        React.createElement("div", { className: "spinner-circle10 spinner-child" }),
        React.createElement("div", { className: "spinner-circle11 spinner-child" }),
        React.createElement("div", { className: "spinner-circle12 spinner-child" })));
};
exports.default = Spinner;
//# sourceMappingURL=Spinner.js.map