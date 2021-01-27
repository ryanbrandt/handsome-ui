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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const enzyme_1 = __importStar(require("enzyme"));
const enzyme_adapter_react_16_1 = __importDefault(require("enzyme-adapter-react-16"));
const TableCell_1 = __importDefault(require("./TableCell"));
enzyme_1.default.configure({ adapter: new enzyme_adapter_react_16_1.default() });
const mockChildren = "foo";
const mockCell = react_1.default.createElement(TableCell_1.default, null, mockChildren);
describe("TableCell component", () => {
    test("Component renders", () => {
        const wrapper = enzyme_1.shallow(mockCell);
        expect(wrapper.exists()).toBe(true);
    });
    test("Renders children", () => {
        const wrapper = enzyme_1.shallow(mockCell);
        expect(wrapper.contains(mockChildren)).toBe(true);
    });
    test("Applies CSS class prop", () => {
        const wrapper = enzyme_1.shallow(react_1.default.createElement(TableCell_1.default, { className: "custom_class" }, "foo"));
        expect(wrapper.find("td").hasClass("custom_class")).toBe(true);
    });
    test("Applies inline styles", () => {
        const wrapper = enzyme_1.shallow(react_1.default.createElement(TableCell_1.default, { style: { opacity: 0.5 } }, "foo"));
        expect(wrapper.find("td").prop("style")).toHaveProperty("opacity", 0.5);
    });
});
//# sourceMappingURL=TableCell.test.js.map