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
const Svgs_1 = require("../../Svgs");
const Layout_1 = require("../../Layout");
require("./index.css");
class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this._handleToggle = () => {
            this.setState((prevState) => {
                const { open } = prevState;
                return { open: !open };
            });
        };
        const { defaultOpen } = props;
        this.state = {
            open: defaultOpen ? defaultOpen : false,
        };
    }
    render() {
        const { heading, children, headingClasses, contentClasses, dividerBottom, dividerTop, } = this.props;
        const { open } = this.state;
        const header = typeof heading === "string" ? (React.createElement("div", { className: helpers_1.combineClassNames("dropdown_container_heading", headingClasses) }, heading)) : (heading);
        return (React.createElement("div", { className: "dropdown_container" },
            dividerTop && React.createElement(Layout_1.Divider, { className: "dropdown_container_divider_top" }),
            React.createElement("div", { className: "dropdown_container_masthead", onClick: this._handleToggle },
                header,
                React.createElement(Svgs_1.Chevron, { width: 15, height: 15, transform: open ? "" : "rotate(180)" })),
            React.createElement("div", { className: helpers_1.combineClassNames(open ? "dropdown-open" : "dropdown-closed", contentClasses) }, children),
            dividerBottom && (React.createElement(Layout_1.Divider, { className: "dropdown_container_divider_bottom" }))));
    }
}
exports.default = Dropdown;
//# sourceMappingURL=Dropdown.js.map