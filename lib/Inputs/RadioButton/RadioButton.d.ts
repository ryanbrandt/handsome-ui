import * as React from "react";
interface Props {
    /**
     * Function to execute on button click
     */
    onClick: Function;
    /**
     * Determines if radio button is checked
     */
    checked: boolean;
    /**
     * Optional flag to disable radio button
     */
    disabled?: boolean;
    /**
     * Optional radio button label
     */
    label?: string;
    /**
     * Optional additional CSS classes
     */
    className?: string;
    /**
     * Optional inline styling
     */
    style?: React.CSSProperties;
}
declare const RadioButton: React.FunctionComponent<Props>;
export default RadioButton;
