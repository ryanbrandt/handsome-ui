import { useState, useEffect } from "react";

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
const useDebounce = <T>(value: T, wait = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const debouncedUpdater = setTimeout(() => setDebouncedValue(value), wait);

    return () => clearTimeout(debouncedUpdater);
  }, [value, setDebouncedValue]);

  return debouncedValue;
};

export default useDebounce;
