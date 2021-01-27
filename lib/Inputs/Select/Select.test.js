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
const Select_1 = __importDefault(require("./Select"));
enzyme_1.default.configure({ adapter: new enzyme_adapter_react_16_1.default() });
const mockOptions = ["option 1", "option 2", "option 3"];
describe("Select component", () => {
    test("Component renders", () => {
        const wrapper = enzyme_1.shallow(react_1.default.createElement(Select_1.default, { value: "", options: mockOptions, onChange: () => null }));
        expect(wrapper.exists()).toBe(true);
    });
    test("Renders all options", () => {
        const wrapper = enzyme_1.shallow(react_1.default.createElement(Select_1.default, { value: "", options: mockOptions, onChange: () => null }));
        expect(wrapper.contains("option 1")).toBe(true);
        expect(wrapper.contains("option 2")).toBe(true);
        expect(wrapper.contains("option 3")).toBe(true);
    });
    test("Respects disabled prop", () => {
        const wrapper = enzyme_1.shallow(react_1.default.createElement(Select_1.default, { value: "", options: mockOptions, onChange: () => null, disabled: true }));
        expect(wrapper.find("select").hasClass("select_select_disabled")).toBe(true);
    });
    test("Executes onChange prop onChange", () => {
        const mockFn = jest.fn(() => null);
        const wrapper = enzyme_1.shallow(react_1.default.createElement(Select_1.default, { value: "", options: mockOptions, onChange: mockFn }));
        wrapper.find("select").simulate("change", {
            currentTarget: { value: "option 1" },
        });
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
    test("CSS class props are applied", () => {
        const wrapper = enzyme_1.shallow(react_1.default.createElement(Select_1.default, { value: "", options: mockOptions, onChange: () => null, containerClasses: "container_class", selectClasses: "select_class" }));
        const containingDiv = wrapper.find("div").at(0);
        const select = wrapper.find("select");
        expect(containingDiv.hasClass("container_class")).toBe(true);
        expect(select.hasClass("select_class")).toBe(true);
    });
});
//# sourceMappingURL=Select.test.js.map