"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = exports.combineClassNames = void 0;
/**
 * Simple helper to combine base CSS classes with optional
 * CSS className props
 * @param baseClass Base class of the element
 * @param optionAdditionalClasses Optional string of additional class props
 */
function combineClassNames(baseClass, optionalAdditionalClasses) {
    let combinedClasses = baseClass;
    if (optionalAdditionalClasses) {
        combinedClasses = `${combinedClasses} ${optionalAdditionalClasses}`;
    }
    return combinedClasses;
}
exports.combineClassNames = combineClassNames;
/**
 * Generic debounce implementation
 *
 * @param callback Fn to debounce
 * @param wait Debounce time--defaults to 500ms
 *
 * @returns The debounce Fn
 */
const debounce = (callback, wait = 500) => {
    let timeout = null;
    const callable = (...args) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => callback(...args), wait);
    };
    return callable;
};
exports.debounce = debounce;
//# sourceMappingURL=helpers.js.map