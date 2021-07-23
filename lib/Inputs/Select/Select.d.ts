import * as React from "react";
interface Option {
    value: string;
    label: string;
}
interface Props {
    /**
     * Options to be available under the select
     */
    options: Array<string | Option>;
    /**
     * Select value, should be controled (e.g. on parent component state)
     */
    value: string;
    /**
     * Function to be executed on value change
     */
    onChange: Function;
    /**
     * Optional label
     */
    label?: string;
    /**
     * Optional disabled flag
     */
    disabled?: boolean;
    /**
     * Optional error to display
     */
    error?: string;
    /**
     * Optional additional container CSS classes
     */
    containerClasses?: string;
    /**
     * Optional additional select classes
     */
    selectClasses?: string;
}
declare const Select: React.FunctionComponent<Props>;
export default Select;
