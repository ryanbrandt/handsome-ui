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
const BounceLoader = (props) => {
    const { className } = props;
    const containerClassName = helpers_1.combineClassNames("bounce_loader", className);
    return (React.createElement("div", { className: containerClassName },
        React.createElement("div", { className: "bounce-circle1" }),
        React.createElement("div", { className: "bounce-circle2" }),
        React.createElement("div", { className: "bounce-circle3" })));
};
exports.default = BounceLoader;
//# sourceMappingURL=BounceLoader.js.map