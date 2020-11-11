"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineClassNames = void 0;
/**
 * Simple helper to combine base CSS classes with optional
 * CSS className props
 */
function combineClassNames(baseClass, optionAdditionalClasses) {
    return optionAdditionalClasses
        ? `${optionAdditionalClasses} ${baseClass}`
        : baseClass;
}
exports.combineClassNames = combineClassNames;
//# sourceMappingURL=helpers.js.map