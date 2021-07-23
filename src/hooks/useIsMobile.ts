import { useEffect, useState, useContext } from "react";

import { windowSizeContext } from "../contexts";
import useWindowSize, { WindowSize } from "./useWindowSize";

export type IsMobileConstraints = Partial<WindowSize>;

export const DEFAULT_CONSTRAINTS: IsMobileConstraints = {
  innerWidth: 1024,
};

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
const useIsMobile = (
  constraints: IsMobileConstraints = DEFAULT_CONSTRAINTS
): boolean => {
  let windowSize = useContext(windowSizeContext);
  if (!windowSize) {
    windowSize = useWindowSize();
  }

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let isMobile = true;

    for (const constraintKey in constraints) {
      if (window[constraintKey] > constraints[constraintKey]) {
        isMobile = false;
        break;
      }
    }

    setIsMobile(isMobile);
  }, [innerWidth, setIsMobile]);

  return isMobile;
};

export default useIsMobile;
