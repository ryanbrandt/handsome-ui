"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._useWindowSize = void 0;
const react_1 = require("react");
const useAppContextOrHook_1 = __importDefault(require("./useAppContextOrHook"));
exports._useWindowSize = () => {
    const [size, setSize] = react_1.useState({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        outerWidth: window.outerWidth,
        outerHeight: window.outerHeight,
    });
    react_1.useLayoutEffect(() => {
        const updateSize = () => {
            const { innerWidth, innerHeight, outerWidth, outerHeight } = window;
            setSize({ innerWidth, innerHeight, outerWidth, outerHeight });
        };
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
};
/**
 * Hook to subscribe to and provide window size parameters on resize events
 *
 * Note: Each instance will add an event listener-- it is best to use this
 * hook in one spot and provide its state down the tree or via context for
 * best performance
 *
 * @returns {WindowSize} An object with the inner and outer window sizes
 */
exports.default = () => useAppContextOrHook_1.default("windowSize", exports._useWindowSize);
//# sourceMappingURL=useWindowSize.js.map