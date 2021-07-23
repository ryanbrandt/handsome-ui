"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
/**
 * Hook to provide a debounce to a value-- generally meant for
 * composition and debounced a hooked value for some downstream
 * action
 *
 * @param value The generic value to debounce
 * @param wait The debounce wait time
 *
 * @returns The value, whenever updated, after the wait
 */
const useDebounce = (value, wait = 500) => {
    const [debouncedValue, setDebouncedValue] = react_1.useState(value);
    react_1.useEffect(() => {
        const debouncedUpdater = setTimeout(() => setDebouncedValue(value), wait);
        return () => clearTimeout(debouncedUpdater);
    }, [value, setDebouncedValue]);
    return debouncedValue;
};
exports.default = useDebounce;
//# sourceMappingURL=useDebounce.js.map