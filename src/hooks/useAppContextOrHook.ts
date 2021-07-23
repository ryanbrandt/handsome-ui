import { useContext } from "react";

import { AppContext, IExtensibleAppContext } from "../contexts";

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
export const useAppContextOrHook = <T>(
  appContextKey: keyof IExtensibleAppContext,
  hook: (...params: any) => T,
  ...params: any
): T => {
  const appContext = useContext(AppContext);
  if (appContext[appContextKey]) {
    return appContext[appContextKey] as T;
  }

  return hook(params);
};
