/// <reference types="react" />
import { WindowSize } from "../hooks";
export interface IAppContext {
    isMobile?: boolean;
    windowSize?: WindowSize;
}
export interface IExtensibleAppContext extends IAppContext {
    [key: string]: any;
}
export declare const AppContext: import("react").Context<IExtensibleAppContext>;
