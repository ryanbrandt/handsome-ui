export interface WindowSize {
    innerWidth: number;
    innerHeight: number;
    outerWidth: number;
    outerHeight: number;
}
declare const _default: () => WindowSize;
/**
 * Hook to subscribe to and provide window size parameters on resize events
 *
 * Note: Each instance will add an event listener-- it is best to use this
 * hook in one spot and provide its state down the tree or via context for
 * best performance
 *
 * @returns {WindowSize} An object with the inner and outer window sizes
 */
export default _default;
