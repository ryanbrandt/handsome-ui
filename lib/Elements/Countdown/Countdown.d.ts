import React from "react";
interface Props {
    /**
     * Initial count to countdown from, in seconds
     */
    initialCount: number;
    /**
     * Optional function to execute on countdown completion
     */
    onCompletion?: Function;
    /**
     * Optional flag to run the countdown on repeat inifintely
     */
    infinite?: boolean;
    /**
     * Optional additional css classes to be applied
     */
    className?: string;
    /**
     * Optional inline styling to be applied
     */
    style?: React.CSSProperties;
}
declare const Countdown: React.FunctionComponent<Props>;
export default Countdown;
