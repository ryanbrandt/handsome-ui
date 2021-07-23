import { WindowSize } from "./useWindowSize";
export declare type IsMobileConstraints = Partial<WindowSize>;
export declare const DEFAULT_CONSTRAINTS: IsMobileConstraints;
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
declare const useIsMobile: (constraints?: IsMobileConstraints) => boolean;
export default useIsMobile;
