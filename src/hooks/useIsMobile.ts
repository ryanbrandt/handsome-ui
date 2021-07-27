import { useEffect, useState } from "react";

import useAppContextOrHook from "./useAppContextOrHook";
import useWindowSize from "./useWindowSize";

export const _useIsMobile = (): boolean => {
  const { innerWidth } = useAppContextOrHook("windowSize", useWindowSize);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(innerWidth < 1024);
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
export default (): boolean => useAppContextOrHook("isMobile", _useIsMobile);
