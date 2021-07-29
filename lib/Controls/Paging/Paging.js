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
const Svgs_1 = require("../../Svgs");
const helpers_1 = require("../../utils/helpers");
exports.TEST_ID = "paging";
const Paging = (props) => {
    const _getButtonClassModifier = (disabled) => {
        let modifier = "";
        if (disabled) {
            modifier = "page-disabled";
        }
        return modifier;
    };
    const { page, totalPages } = props;
    const _renderPreviousSection = () => {
        const { onPrev } = props;
        const disabled = page === 1;
        let prevFn = () => onPrev();
        if (disabled) {
            prevFn = () => null;
        }
        return (React.createElement("div", { "data-testid": "pagingPrev", onClick: prevFn, className: helpers_1.combineClassNames("paging_controller-button page-left", _getButtonClassModifier(disabled)) },
            React.createElement(Svgs_1.Chevron, { width: 8, height: 8, transform: "rotate(90)" })));
    };
    const _renderNextSection = () => {
        const { onNext } = props;
        const disabled = page === totalPages;
        let nextFn = () => onNext();
        if (disabled) {
            nextFn = () => null;
        }
        return (React.createElement("div", { "data-testid": "pagingNext", onClick: nextFn, className: helpers_1.combineClassNames("paging_controller-button page-right", _getButtonClassModifier(disabled)) },
            React.createElement(Svgs_1.Chevron, { width: 8, height: 8, transform: "rotate(270)" })));
    };
    return (React.createElement("div", { "data-testid": exports.TEST_ID, className: "paging_controller-container" },
        _renderPreviousSection(),
        React.createElement("div", { className: "paging_controller-display" },
            page,
            " of ",
            totalPages),
        _renderNextSection()));
};
exports.default = Paging;
//# sourceMappingURL=Paging.js.map