/**
 * Simple helper to combine base CSS classes with optional
 * CSS className props
 */
export function combineClassNames(
  baseClass: string,
  optionAdditionalClasses: string | undefined
): string {
  return optionAdditionalClasses
    ? `${optionAdditionalClasses} ${baseClass}`
    : baseClass;
}
