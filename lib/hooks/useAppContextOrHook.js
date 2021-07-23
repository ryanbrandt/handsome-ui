"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppContextOrHook = void 0;
const react_1 = require("react");
const contexts_1 = require("../contexts");
/**
 * Wrapper function which will attempt to rely on AppContext
 * for state and fallback on a hook value if that state is
 * unavailable
 *
 * @param appContextKey The key on IAppContext which the state lives under
 * @param hook The fallback hook
 * @param params Hook params
 *
 * @returns T
 */
const useAppContextOrHook = (appContextKey, hook, ...params) => {
    const appContext = react_1.useContext(contexts_1.AppContext);
    if (appContext[appContextKey]) {
        return appContext[appContextKey];
    }
    return hook(params);
};
exports.useAppContextOrHook = useAppContextOrHook;
//# sourceMappingURL=useAppContextOrHook.js.map