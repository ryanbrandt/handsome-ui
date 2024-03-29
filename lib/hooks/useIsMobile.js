"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._useIsMobile = void 0;
const react_1 = require("react");
const useAppContextOrHook_1 = __importDefault(require("./useAppContextOrHook"));
const useWindowSize_1 = __importDefault(require("./useWindowSize"));
const _useIsMobile = () => {
    const { innerWidth } = useWindowSize_1.default();
    const [isMobile, setIsMobile] = react_1.useState(false);
    react_1.useEffect(() => {
        setIsMobile(innerWidth < 1024);
    }, [innerWidth, setIsMobile]);
    return isMobile;
};
exports._useIsMobile = _useIsMobile;
/**
 * Hook to detect if the client is mobile via window sizing
 *
 * @param constraints Optional custom strictly-less window size constraints
 * to apply to determine if a screen is mobile
 *
 * @returns {boolean} Boolean representing is the screen is mobile
 */
exports.default = () => useAppContextOrHook_1.default("isMobile", exports._useIsMobile);
//# sourceMappingURL=useIsMobile.js.map