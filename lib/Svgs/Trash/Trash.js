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
function Trash(props) {
    return (React.createElement("svg", Object.assign({ width: 32, height: 32 }, props),
        React.createElement("path", { d: "M19 24H5a2 2 0 01-2-2V5H2V3h6V1.5C8 .673 8.673 0 9.5 0h5c.825 0 1.5.671 1.5 1.5V3h6v2h-1v17a2 2 0 01-2 2zm0-19H5v16.5a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V5zm-9 4a1 1 0 00-2 0v9a1 1 0 002 0V9zm6 0a1 1 0 00-2 0v9a1 1 0 002 0V9zm-2-7h-4v1h4V2z" })));
}
exports.default = Trash;
//# sourceMappingURL=Trash.js.map