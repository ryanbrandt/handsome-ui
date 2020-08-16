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
function BurgerMenu(props) {
    return (React.createElement("svg", Object.assign({ width: 25, height: 25, viewBox: "0 0 25 25" }, props),
        React.createElement("title", null, "BurgerMenu.Icon"),
        React.createElement("defs", null,
            React.createElement("filter", { x: "-.2%", y: "-3.6%", width: "100.5%", height: "110.1%", filterUnits: "objectBoundingBox", id: "prefix__a" },
                React.createElement("feOffset", { dy: 1, in: "SourceAlpha", result: "shadowOffsetOuter1" }),
                React.createElement("feGaussianBlur", { stdDeviation: 1, in: "shadowOffsetOuter1", result: "shadowBlurOuter1" }),
                React.createElement("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0", in: "shadowBlurOuter1" })),
            React.createElement("path", { id: "prefix__b", d: "M0 0h1440v69H0z" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("g", { transform: "translate(-29 -22)" },
                React.createElement("use", { fill: "#000", filter: "url(#prefix__a)", xlinkHref: "#prefix__b" }),
                React.createElement("use", { fill: "#FFF", xlinkHref: "#prefix__b" })),
            React.createElement("g", { fill: "#03283B" },
                React.createElement("path", { d: "M0 0h25v5H0zM0 10h25v5H0zM0 20h25v5H0z" })))));
}
exports.default = BurgerMenu;
//# sourceMappingURL=BurgerMenu.js.map