import * as React from "react";

import { WindowSize } from "../hooks";

const windowSizeContext = React.createContext<WindowSize>({
  innerWidth: 0,
  innerHeight: 0,
  outerWidth: 0,
  outerHeight: 0,
});

export default windowSizeContext;
