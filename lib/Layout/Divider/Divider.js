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
exports.TEST_ID = void 0;
const React = __importStar(require("react"));
exports.TEST_ID = "divider";
const Divider = (props) => {
    const _computeClassName = () => {
        const { solid, vertical, className } = props;
        let classes = new Array();
        if (className) {
            classes.push(className);
        }
        if (solid) {
            classes.push(vertical ? "divider_solid_vr" : "divider_solid_hr");
        }
        else {
            classes.push(vertical ? "divider_base_vr" : "divider_base_hr");
        }
        return classes.join(" ");
    };
    const { style } = props;
    return (React.createElement("div", { "data-testid": exports.TEST_ID, className: _computeClassName(), style: style }));
};
exports.default = Divider;
//# sourceMappingURL=Divider.js.map