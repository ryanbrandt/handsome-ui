"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useAppContextOrHook_1 = require("./useAppContextOrHook");
const useWindowSize_1 = __importDefault(require("./useWindowSize"));
const useIsMobile = () => {
    const { innerWidth } = useAppContextOrHook_1.useAppContextOrHook("windowSize", useWindowSize_1.default);
    const [isMobile, setIsMobile] = react_1.useState(false);
    react_1.useEffect(() => {
        setIsMobile(innerWidth < 1024);
    }, [innerWidth, setIsMobile]);
    return isMobile;
};
/**
 * Hook to detect if the client is mobile via window sizing
 *
 * @param constraints Optional custom strictly-less window size constraints
 * to apply to determine if a screen is mobile
 *
 * @returns {boolean} Boolean representing is the screen is mobile
 */
exports.default = () => useAppContextOrHook_1.useAppContextOrHook("isMobile", useIsMobile);
//# sourceMappingURL=useIsMobile.js.map