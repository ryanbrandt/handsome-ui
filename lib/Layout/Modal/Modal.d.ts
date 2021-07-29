import * as React from "react";
export declare const TEST_ID = "modal";
interface Props {
    /**
     * Flag that toggles modal visibility
     */
    open: boolean;
    /**
     * Children to render within modal
     */
    children: React.ReactNode;
    /**
     * Function to execute on Modal close
     */
    onClose: Function;
    /**
     * Modal heading string or JSX to be rendered
     */
    heading?: string | React.ReactNode;
    /**
     * Optional additional modal CSS classes
     */
    modalClassName?: string;
}
declare const Modal: React.FunctionComponent<Props>;
export default Modal;
