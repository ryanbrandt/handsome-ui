"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_CONSTRAINTS = void 0;
const react_1 = require("react");
const contexts_1 = require("../contexts");
const useWindowSize_1 = __importDefault(require("./useWindowSize"));
exports.DEFAULT_CONSTRAINTS = {
    innerWidth: 1024,
};
/**
 * Hook to detect if the client is mobile via window sizing.
 * Will attempt to use the global windowSizeContext, but will fallback
 * on useWindowSize() if the context is not defined.
 *
 * @param constraints Optional custom strictly-less window size constraints
 * to apply to determine if a screen is mobile
 *
 * @returns {boolean} Boolean representing is the screen is mobile
 */
const useIsMobile = (constraints = exports.DEFAULT_CONSTRAINTS) => {
    let windowSize = react_1.useContext(contexts_1.windowSizeContext);
    if (!windowSize) {
        windowSize = useWindowSize_1.default();
    }
    const [isMobile, setIsMobile] = react_1.useState(false);
    react_1.useEffect(() => {
        let isMobile = true;
        for (const constraintKey in constraints) {
            if (window[constraintKey] > constraints[constraintKey]) {
                isMobile = false;
                break;
            }
        }
        setIsMobile(isMobile);
    }, [innerWidth, setIsMobile]);
    return isMobile;
};
exports.default = useIsMobile;
//# sourceMappingURL=useIsMobile.js.map