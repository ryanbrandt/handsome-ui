import * as React from "react";

import { WindowSize } from "../hooks";

const windowSizeContext = React.createContext<WindowSize | undefined>(
  undefined
);

export default windowSizeContext;
