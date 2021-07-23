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
function Suitcase(props) {
    return (React.createElement("svg", Object.assign({ id: "prefix__suitcase_icon", viewBox: "0 0 240 192", width: 32, height: 32 }, props),
        React.createElement("title", null, "suitcase icon"),
        React.createElement("style", null, "*{stroke:none}"),
        React.createElement("path", { className: "prefix__body prefix__sides", d: "M40 32v160H24a24 24 0 01-24-24V56a24 24 0 0124-24z" }),
        React.createElement("path", { className: "prefix__body", d: "M48 32h144v160H48z" }),
        React.createElement("path", { className: "prefix__body prefix__sides", d: "M200 32h16a24 24 0 0124 24v112a24 24 0 01-24 24h-16z" }),
        React.createElement("path", { d: "M84 30V18a18 18 0 0118-18h36a18 18 0 0118 18v12h-12V18a6 6 0 00-6-6h-36a6 6 0 00-6 6v12z" })));
}
exports.default = Suitcase;
//# sourceMappingURL=Suitcase.js.map