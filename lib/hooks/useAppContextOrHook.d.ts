import { IExtensibleAppContext } from "../contexts";
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
declare const useAppContextOrHook: <T>(appContextKey: keyof IExtensibleAppContext, hook: (...params: any) => T, ...params: any) => T;
export default useAppContextOrHook;
