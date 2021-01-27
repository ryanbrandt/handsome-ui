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
const Badge_1 = __importDefault(require("./Badge"));
enzyme_1.default.configure({ adapter: new enzyme_adapter_react_16_1.default() });
describe("Badge Component", () => {
    const MOCK_TEXT_CONTENT = "foo";
    const MOCK_REACT_CONTENT = react_1.default.createElement("div", null, "foo");
    function getContainingDiv(wrapper) {
        return wrapper.find("div").at(0);
    }
    test("Component renders", () => {
        const wrapper = enzyme_1.shallow(react_1.default.createElement(Badge_1.default, { content: MOCK_TEXT_CONTENT }));
        expect(wrapper.exists()).toBe(true);
    });
    test("Component renders text content", () => {
        const wrapper = enzyme_1.shallow(react_1.default.createElement(Badge_1.default, { content: MOCK_TEXT_CONTENT }));
        expect(wrapper.find(MOCK_TEXT_CONTENT)).toBeDefined();
    });
    test("Component renders react content", () => {
        const wrapper = enzyme_1.shallow(react_1.default.createElement(Badge_1.default, { content: MOCK_REACT_CONTENT }));
        expect(wrapper.find(MOCK_REACT_CONTENT)).toBeDefined();
    });
    test("Component applies CSS className prop", () => {
        const MOCK_CLASSNAME = "foo_class";
        const wrapper = enzyme_1.shallow(react_1.default.createElement(Badge_1.default, { className: MOCK_CLASSNAME, content: MOCK_TEXT_CONTENT }));
        expect(getContainingDiv(wrapper).hasClass(MOCK_CLASSNAME)).toBeTruthy();
    });
    test("Component applies inline style prop", () => {
        const wrapper = enzyme_1.shallow(react_1.default.createElement(Badge_1.default, { style: { color: "red" }, content: MOCK_TEXT_CONTENT }));
        expect(getContainingDiv(wrapper).get(0).props.style).toHaveProperty("color");
        expect(getContainingDiv(wrapper).get(0).props.style.color).toEqual("red");
    });
});
//# sourceMappingURL=Badge.test.js.map