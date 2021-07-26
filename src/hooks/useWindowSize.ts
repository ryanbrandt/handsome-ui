import { useLayoutEffect, useState } from "react";

import useAppContextOrHook from "./useAppContextOrHook";

export interface WindowSize {
  innerWidth: number;
  innerHeight: number;
  outerWidth: number;
  outerHeight: number;
}

const useWindowSize = (): WindowSize => {
  const [size, setSize] = useState<WindowSize>({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
  });

  useLayoutEffect(() => {
    const updateSize = () => {
      const { innerWidth, innerHeight, outerWidth, outerHeight } = window;

      setSize({ innerWidth, innerHeight, outerWidth, outerHeight });
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
};

/**
 * Hook to subscribe to and provide window size parameters on resize events
 *
 * Note: Each instance will add an event listener-- it is best to use this
 * hook in one spot and provide its state down the tree or via context for
 * best performance
 *
 * @returns {WindowSize} An object with the inner and outer window sizes
 */
export default (): WindowSize =>
  useAppContextOrHook("windowSize", useWindowSize);
