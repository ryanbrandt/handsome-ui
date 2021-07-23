import { WindowSize } from "./useWindowSize";
export declare type IsMobileConstraints = Partial<WindowSize>;
export declare const DEFAULT_CONSTRAINTS: IsMobileConstraints;
declare const _default: (constraints?: IsMobileConstraints) => boolean;
/**
 * Hook to detect if the client is mobile via window sizing
 *
 * @param constraints Optional custom strictly-less window size constraints
 * to apply to determine if a screen is mobile
 *
 * @returns {boolean} Boolean representing is the screen is mobile
 */
export default _default;
