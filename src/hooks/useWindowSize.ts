import { useLayoutEffect, useState } from "react";

export interface WindowSize {
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

export default useWindowSize;
