"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
/**
 * Hook to subscribe to and provide window size parameters on resize events
 *
 * Note: Each instance will add an event listener-- it is best to use this
 * hook in one spot and provide its state down the tree or via context for
 * best performance
 *
 * @returns {WindowSize} An object with the inner and outer window sizes
 */
const useWindowSize = () => {
    const [size, setSize] = react_1.useState({
        innerWidth: 0,
        innerHeight: 0,
        outerWidth: 0,
        outerHeight: 0,
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
exports.default = useWindowSize;
//# sourceMappingURL=useWindowSize.js.map