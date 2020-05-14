import * as React from "react";
export interface Props {
    /**
     * Text content of the button
     */
    title: string;
    /**
     * Function to execute on button click
     */
    onClick: Function;
    /**
     * Optional icon to display aside text in button
     */
    icon?: React.ReactNode;
    /**
     * Flag to specify if button is the color inverting style
     */
    inverting?: boolean;
    /**
     * Flag to specify if button is round style
     */
    round?: boolean;
    /**
     * Flag to specify if button is disabled; defaults to enabled
     */
    disabled?: boolean;
    /**
     * Optional additional CSS classes to apply to the button
     */
    className?: string;
    /**
     * Optional styles to be defined inline--inline styling is discouraged
     */
    style?: React.CSSProperties;
}
