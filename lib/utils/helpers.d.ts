/**
 * Simple helper to combine base CSS classes with optional
 * CSS className props
 * @param baseClass Base class of the element
 * @param optionAdditionalClasses Optional string of additional class props
 */
export declare function combineClassNames(baseClass: string, optionalAdditionalClasses?: string): string;
/**
 * Generic debounce implementation
 *
 * @param callback Fn to debounce
 * @param wait Debounce time--defaults to 500ms
 *
 * @returns The debounce Fn
 */
export declare const debounce: <T>(callback: (...args: any) => T, wait?: number) => T;
