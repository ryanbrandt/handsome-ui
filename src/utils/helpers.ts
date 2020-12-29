/**
 * Simple helper to combine base CSS classes with optional
 * CSS className props
 * @param baseClass Base class of the element
 * @param optionAdditionalClasses Optional string of additional class props
 */
export function combineClassNames(
  baseClass: string,
  optionAdditionalClasses: string | undefined
): string {
  return optionAdditionalClasses
    ? `${optionAdditionalClasses} ${baseClass}`
    : baseClass;
}
