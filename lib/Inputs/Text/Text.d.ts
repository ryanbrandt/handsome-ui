import * as React from "react";
import "./index.css";
interface Props {
    /**
     * Optional value, should be defined if textarea is controlled with onChange fn
     */
    value?: string | number;
    /**
     * Optional default textarea value
     */
    defaultValue?: string | number;
    /**
     * Optional onChange fn to execute on value change
     */
    onChange?: Function;
    /**
     * Optional onBlur fn to execute on textarea blur
     */
    onBlur?: Function;
    /**
     * Optional textarea label
     */
    label?: string;
    /**
     * Optional textarea help text
     */
    help?: string;
    /**
     * Optional textarea placeholder
     */
    placeholder?: string;
    /**
     * Optional error text to display
     */
    error?: string;
    /**
     * Optional flag to disable textarea
     */
    disabled?: boolean;
    /**
     * Optional textarea additional CSS classes
     */
    className?: string;
    /**
     * Optional textarea inline styles
     */
    style?: React.CSSProperties;
    /**
     * Optional textarea container CSS classes
     */
    containerClassName?: string;
    /**
     * Optional textarea container inline styles
     */
    containerStyle?: React.CSSProperties;
}
declare const Text: React.FunctionComponent<Props>;
export default Text;
