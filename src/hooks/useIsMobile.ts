import { useEffect, useState, useContext } from "react";

import { windowSizeContext } from "../contexts";

const useIsMobile = (
  { innerWidth } = useContext(windowSizeContext)
): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const { innerWidth } = window;

    let isMobile = false;
    if (innerWidth < 1024) {
      isMobile = true;
    }

    setIsMobile(isMobile);
  }, [innerWidth, setIsMobile]);

  return isMobile;
};

export default useIsMobile;
