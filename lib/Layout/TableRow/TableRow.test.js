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
const TableRow_1 = __importDefault(require("./TableRow"));
const TableCell_1 = __importDefault(require("../TableCell/TableCell"));
enzyme_1.default.configure({ adapter: new enzyme_adapter_react_16_1.default() });
const mockChildren = react_1.default.createElement(TableCell_1.default, null, "foo");
const mockRow = react_1.default.createElement(TableRow_1.default, null, mockChildren);
describe("TableRow component", () => {
    test("Component renders", () => {
        const wrapper = enzyme_1.shallow(mockRow);
        expect(wrapper.exists()).toBe(true);
    });
    test("Applies darkened prop", () => {
        const notDarkenedWrapper = enzyme_1.shallow(mockRow);
        const darkenedWrapper = enzyme_1.shallow(react_1.default.createElement(TableRow_1.default, { darkened: true },
            react_1.default.createElement(TableCell_1.default, null, "foo")));
        expect(notDarkenedWrapper.find("tr").hasClass("table_row_darkened")).toBe(false);
        expect(darkenedWrapper.find("tr").hasClass("table_row_darkened")).toBe(true);
    });
    test("Renders children", () => {
        const wrapper = enzyme_1.shallow(mockRow);
        expect(wrapper.contains(mockChildren)).toBe(true);
    });
    test("Applies CSS class prop", () => {
        const wrapper = enzyme_1.shallow(react_1.default.createElement(TableRow_1.default, { className: "custom_class" },
            react_1.default.createElement(TableCell_1.default, null, "foo")));
        expect(wrapper.find("tr").hasClass("custom_class")).toBe(true);
    });
    test("Applies inline styles", () => {
        const wrapper = enzyme_1.shallow(react_1.default.createElement(TableRow_1.default, { style: { opacity: 0.5 } },
            react_1.default.createElement(TableCell_1.default, null, "foo")));
        expect(wrapper.find("tr").prop("style")).toHaveProperty("opacity", 0.5);
    });
    test("Executes onClick prop on click", () => {
        const mockFn = jest.fn(() => null);
        const wrapper = enzyme_1.shallow(react_1.default.createElement(TableRow_1.default, { onClick: mockFn },
            react_1.default.createElement(TableCell_1.default, null, "foo")));
        wrapper.find("tr").simulate("click");
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
    test("Applies disabled prop", () => {
        const wrapper = enzyme_1.shallow(react_1.default.createElement(TableRow_1.default, { disabled: true },
            react_1.default.createElement(TableCell_1.default, null, "foo")));
        expect(wrapper.find("tr").hasClass("table_row-disabled")).toBe(true);
    });
});
//# sourceMappingURL=TableRow.test.js.map