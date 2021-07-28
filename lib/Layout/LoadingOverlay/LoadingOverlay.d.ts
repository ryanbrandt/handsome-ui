import * as React from "react";
export declare const TEST_ID = "loadingOverlay";
interface Props {
    /**
     * Flag to toggle showing/hiding overlay
     */
    show: boolean;
    /**
     * Optional message to display
     */
    message?: string;
    /**
     * Optional flag to give overlay fade in/out effect
     */
    fade?: boolean;
}
declare const LoadingOverlay: React.FunctionComponent<Props>;
export default LoadingOverlay;
