import { useLayoutEffect, useCallback, useEffect, useState } from "react";

interface WindowSize {
  innerWidth: number;
  innerHeight: number;
  outerWidth: number;
  outerHeight: number;
}

const useWindowSize = (): WindowSize => {
  const [size, setSize] = useState<WindowSize>({
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0,
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

const [windowSize] = useState(useWindowSize());
const [isMobile, setIsMobile] = useState(false);

export const useIsMobile = (): boolean => {
  useEffect(() => {
    const { innerWidth } = window;

    let isMobile = false;
    if (innerWidth < 1024) {
      isMobile = true;
    }

    setIsMobile(isMobile);
  }, [windowSize, setIsMobile]);

  return isMobile;
};
