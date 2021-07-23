import { createContext } from "react";

import { WindowSize } from "../hooks";

export interface IAppContext {
  isMobile?: boolean;
  windowSize?: WindowSize;
}

export interface IExtensibleAppContext extends IAppContext {
  [key: string]: any;
}

export const AppContext = createContext<IExtensibleAppContext>({});
