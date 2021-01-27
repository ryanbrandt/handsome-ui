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
const Input_1 = __importDefault(require("./Input"));
const Svgs_1 = require("../../Svgs");
enzyme_1.default.configure({ adapter: new enzyme_adapter_react_16_1.default() });
describe("Input component", () => {
    test("Component renders", () => {
        const wrapper = enzyme_1.mount(react_1.default.createElement(Input_1.default, { value: "", onChange: () => null }));
        expect(wrapper.exists()).toBe(true);
    });
    test("Renders appropriate input type", () => {
        const textWrapper = enzyme_1.mount(react_1.default.createElement(Input_1.default, { value: "", onChange: () => null }));
        const numberWrapper = enzyme_1.mount(react_1.default.createElement(Input_1.default, { type: "number", value: "", onChange: () => null }));
        const dateWrapper = enzyme_1.mount(react_1.default.createElement(Input_1.default, { type: "date", value: "", onChange: () => null }));
        expect(textWrapper.find("input").props().type).toBe("text");
        expect(numberWrapper.find("input").props().type).toBe("number");
        expect(dateWrapper.find("input").props().type).toBe("date");
    });
    test("Renders label", () => {
        const wrapper = enzyme_1.mount(react_1.default.createElement(Input_1.default, { label: "My label", value: "", onChange: () => null }));
        expect(wrapper.find("label").contains("My label")).toBe(true);
    });
    test("Renders errors", () => {
        const wrapper = enzyme_1.mount(react_1.default.createElement(Input_1.default, { error: "My error", value: "", onChange: () => null }));
        expect(wrapper.find("span").contains("My error")).toBe(true);
    });
    test("Renders help text", () => {
        const wrapper = enzyme_1.mount(react_1.default.createElement(Input_1.default, { help: "help", value: "", onChange: () => null }));
        expect(wrapper.find("span").contains("help")).toBe(true);
    });
    test("Renders left icon prop", () => {
        const wrapper = enzyme_1.mount(react_1.default.createElement(Input_1.default, { iconLeft: react_1.default.createElement(Svgs_1.Search, null), value: "", onChange: () => null }));
        expect(wrapper.find(Svgs_1.Search).exists()).toBe(true);
    });
    test("Styles appropriately when disabled", () => {
        const wrapper = enzyme_1.mount(react_1.default.createElement(Input_1.default, { value: "", onChange: () => null, disabled: true }));
        const inputTag = wrapper.find("input");
        expect(inputTag.hasClass("input_input_disabled")).toBe(true);
    });
    test("Execute onChange function when value changed", () => {
        const mockFn = jest.fn(() => null);
        const wrapper = enzyme_1.mount(react_1.default.createElement(Input_1.default, { onChange: mockFn }));
        wrapper.find("input").simulate("change", {
            currentTarget: { value: "change" },
        });
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
    test("Execute onBlur function when leaves focus", () => {
        const mockFn = jest.fn(() => null);
        const wrapper = enzyme_1.mount(react_1.default.createElement(Input_1.default, { onBlur: mockFn }));
        wrapper.find("input").simulate("blur", {
            currentTarget: { value: "blur" },
        });
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
    test("CSS class props are applied", () => {
        const wrapper = enzyme_1.mount(react_1.default.createElement(Input_1.default, { className: "input_class", containerClassName: "container_class" }));
        const containingDiv = wrapper.find("div").at(0);
        const input = wrapper.find("input");
        expect(containingDiv.hasClass("container_class")).toBe(true);
        expect(input.hasClass("input_class")).toBe(true);
    });
    test("Inline style props are applied", () => {
        const wrapper = enzyme_1.mount(react_1.default.createElement(Input_1.default, { style: { color: "blue" }, containerStyle: { color: "red" } }));
        const containingDiv = wrapper.find("div").at(0);
        const input = wrapper.find("input");
        expect(containingDiv.get(0).props.style).toHaveProperty("color");
        expect(input.get(0).props.style).toHaveProperty("color");
        expect(containingDiv.get(0).props.style.color).toEqual("red");
        expect(input.get(0).props.style.color).toEqual("blue");
    });
});
//# sourceMappingURL=Input.test.js.map