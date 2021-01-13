import * as React from "react";
import "./index.css";
declare type InputType = "text" | "search" | "password" | "number" | "date";
interface Props {
    /**
     * Optional value, should be defined if input is controlled with onChange fn
     */
    value?: string | number;
    /**
     * Optional default input value
     */
    defaultValue?: string | number;
    /**
     * Optional onChange fn to execute on value change
     */
    onChange?: Function;
    /**
     * Optional onBlur fn to execute on input blur
     */
    onBlur?: Function;
    /**
     * Optional input label
     */
    label?: string;
    /**
     * Optional input help text
     */
    help?: string;
    /**
     * Optional input placeholder
     */
    placeholder?: string;
    /**
     * Optional input type, defaults text
     */
    type?: InputType;
    /**
     * Optional left icon
     */
    iconLeft?: React.ReactNode;
    /**
     * Optional error text to display
     */
    error?: string;
    /**
     * Optional flag to disable input
     */
    disabled?: boolean;
    /**
     * Optional input additional CSS classes
     */
    className?: string;
    /**
     * Optional input inline styles
     */
    style?: React.CSSProperties;
    /**
     * Optional contaier additional CSS classes
     */
    containerClassName?: string;
    /**
     * Optional container inline styles
     */
    containerStyle?: React.CSSProperties;
}
declare const Input: React.FunctionComponent<Props>;
export default Input;
