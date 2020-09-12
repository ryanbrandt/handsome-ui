import * as React from "react";
import "./index.css";
interface Props {
    /**
     * Flag to toggle showing/hiding overlay
     */
    show: boolean;
    /**
     * Optional message to display
     */
    message?: string;
}
declare const LoadingOverlay: React.FunctionComponent<Props>;
export default LoadingOverlay;
