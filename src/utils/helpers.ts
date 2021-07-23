/**
 * Simple helper to combine base CSS classes with optional
 * CSS className props
 * @param baseClass Base class of the element
 * @param optionAdditionalClasses Optional string of additional class props
 */
export function combineClassNames(
  baseClass: string,
  optionalAdditionalClasses?: string
): string {
  let combinedClasses = baseClass;

  if (optionalAdditionalClasses) {
    combinedClasses = `${combinedClasses} ${optionalAdditionalClasses}`;
  }

  return combinedClasses;
}

/**
 * Generic debounce implementation
 *
 * @param callback Fn to debounce
 * @param wait Debounce time--defaults to 500ms
 *
 * @returns The debounce Fn
 */
export const debounce = <T>(callback: (...args: any) => T, wait = 500): T => {
  let timeout: NodeJS.Timeout | null = null;

  const callable = (...args: any) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => callback(...args), wait);
  };

  return <T>(<any>callable);
};
