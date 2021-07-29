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
declare const useDebounce: <T>(value: T, wait?: number) => T;
export default useDebounce;
