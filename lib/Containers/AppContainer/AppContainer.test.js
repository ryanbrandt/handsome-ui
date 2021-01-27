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
const AppContainer_1 = __importDefault(require("./AppContainer"));
enzyme_1.default.configure({ adapter: new enzyme_adapter_react_16_1.default() });
describe("App container", () => {
    const MOCK_CHILDREN = react_1.default.createElement("div", null, "child");
    function getContainerDiv(wrapper) {
        return wrapper.find("div").at(0);
    }
    test("Component renders", () => {
        const wrapper = enzyme_1.shallow(react_1.default.createElement(AppContainer_1.default, null, MOCK_CHILDREN));
        expect(wrapper.exists()).toBe(true);
    });
    test("Component renders children", () => {
        const wrapper = enzyme_1.shallow(react_1.default.createElement(AppContainer_1.default, null, MOCK_CHILDREN));
        const children = wrapper.find("div").contains("child");
        expect(children).toBeDefined();
    });
    test("Component renders header prop", () => {
        const MOCK_HEADER = react_1.default.createElement("div", null, "header");
        const wrapper = enzyme_1.shallow(react_1.default.createElement(AppContainer_1.default, { header: MOCK_HEADER }, MOCK_CHILDREN));
        const header = wrapper.find("div").contains("header");
        expect(header).toBeDefined();
    });
    test("Component applies className prop", () => {
        const MOCK_CLASS = "jest-class";
        const wrapper = enzyme_1.shallow(react_1.default.createElement(AppContainer_1.default, { className: MOCK_CLASS }, MOCK_CHILDREN));
        expect(getContainerDiv(wrapper).hasClass(MOCK_CLASS)).toBeTruthy();
    });
    test("Component applies inline style prop", () => {
        const MOCK_STYLES = {
            display: "flex",
        };
        const wrapper = enzyme_1.shallow(react_1.default.createElement(AppContainer_1.default, { style: MOCK_STYLES }, MOCK_CHILDREN));
        expect(getContainerDiv(wrapper).get(0).props.style).toEqual(MOCK_STYLES);
    });
    test("Component adds resize listener on mount, and removes on unmount", () => {
        const EXPECTED_EVENT = "resize";
        let events = new Array();
        jest
            .spyOn(window, "addEventListener")
            .mockImplementation((event, handle, options) => {
            events[event] = handle;
        });
        jest
            .spyOn(window, "removeEventListener")
            .mockImplementation((event, handle, options) => {
            events[event] = undefined;
        });
        const wrapper = enzyme_1.mount(react_1.default.createElement(AppContainer_1.default, null, MOCK_CHILDREN));
        expect(events[EXPECTED_EVENT]).toBeDefined();
        wrapper.unmount();
        expect(events[EXPECTED_EVENT]).toBeUndefined();
    });
});
//# sourceMappingURL=AppContainer.test.js.map