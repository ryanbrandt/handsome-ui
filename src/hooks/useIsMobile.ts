import { useEffect, useState } from "react";

import { useAppContextOrHook } from "./useAppContextOrHook";
import useWindowSize, { WindowSize } from "./useWindowSize";

export type IsMobileConstraints = Partial<WindowSize>;

export const DEFAULT_CONSTRAINTS: IsMobileConstraints = {
  innerWidth: 1024,
};

const useIsMobile = (
  constraints: IsMobileConstraints = DEFAULT_CONSTRAINTS
): boolean => {
  const windowSize = useAppContextOrHook("windowSize", useWindowSize);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let isMobile = true;

    for (const constraintKey in constraints) {
      if (windowSize[constraintKey] > constraints[constraintKey]) {
        isMobile = false;
        break;
      }
    }

    setIsMobile(isMobile);
  }, [innerWidth, setIsMobile]);

  return isMobile;
};

/**
 * Hook to detect if the client is mobile via window sizing
 *
 * @param constraints Optional custom strictly-less window size constraints
 * to apply to determine if a screen is mobile
 *
 * @returns {boolean} Boolean representing is the screen is mobile
 */
export default (
  constraints: IsMobileConstraints = DEFAULT_CONSTRAINTS
): boolean => useAppContextOrHook("isMobile", useIsMobile, constraints);
