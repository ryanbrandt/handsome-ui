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
const Button_1 = __importDefault(require("./Button"));
enzyme_1.default.configure({ adapter: new enzyme_adapter_react_16_1.default() });
describe("Button Component", () => {
    test("Component renders", () => {
        const wrapper = enzyme_1.shallow(react_1.default.createElement(Button_1.default, { onClick: () => null, title: "title" }));
        expect(wrapper.exists()).toBe(true);
    });
    test("Standard button styles correctly", () => {
        const wrapper = enzyme_1.shallow(react_1.default.createElement(Button_1.default, { onClick: () => null, title: "title" }));
        const containingDiv = wrapper.find("div").at(0);
        expect(containingDiv.hasClass("button_common")).toBe(true);
        expect(containingDiv.hasClass("button_inverting")).toBe(false);
        expect(containingDiv.hasClass("button_round")).toBe(false);
        expect(containingDiv.hasClass("button_disabled")).toBe(false);
    });
    test("Inverting prop styles correctly", () => {
        const wrapper = enzyme_1.shallow(react_1.default.createElement(Button_1.default, { onClick: () => null, title: "title", inverting: true }));
        const containingDiv = wrapper.find("div").at(0);
        expect(containingDiv.hasClass("button_inverting")).toBe(true);
    });
    test("Round prop styles correctly", () => {
        const wrapper = enzyme_1.shallow(react_1.default.createElement(Button_1.default, { onClick: () => null, title: "title", round: true }));
        const containingDiv = wrapper.find("div").at(0);
        expect(containingDiv.hasClass("button_round")).toBe(true);
    });
    test("Disabled prop styles correctly", () => {
        const wrapper = enzyme_1.shallow(react_1.default.createElement(Button_1.default, { onClick: () => null, title: "title", disabled: true }));
        const containingDiv = wrapper.find("div").at(0);
        expect(containingDiv.hasClass("button_disabled")).toBe(true);
    });
    test("Composes classes with custom className", () => {
        const wrapper = enzyme_1.shallow(react_1.default.createElement(Button_1.default, { onClick: () => null, title: "title", className: "foo_bar" }));
        const containingDiv = wrapper.find("div").at(0);
        expect(containingDiv.hasClass("foo_bar")).toBe(true);
    });
    test("Inline styling is obeyed", () => {
        const wrapper = enzyme_1.shallow(react_1.default.createElement(Button_1.default, { onClick: () => null, title: "title", style: { opacity: 0.5 } }));
        const containingDivStyle = wrapper
            .find("div")
            .at(0)
            .props().style;
        expect(containingDivStyle).toHaveProperty("opacity", 0.5);
    });
    test("onClick prop triggered onClick", () => {
        const mockFn = jest.fn(() => null);
        const wrapper = enzyme_1.shallow(react_1.default.createElement(Button_1.default, { onClick: mockFn, title: "title" }));
        wrapper
            .find("div")
            .at(0)
            .simulate("click");
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});
//# sourceMappingURL=Button.test.js.map