import * as React from "react";
import "./index.css";
interface Props {
    /**
     * Flag that toggles modal visibility
     */
    open: boolean;
    /**
     * Modal heading string or JSX to be rendered
     */
    heading: string | React.ReactNode;
    /**
     * Children to render within modal
     */
    children: React.ReactNode;
    /**
     * Function to execute on Modal close
     */
    onClose: Function;
}
declare const Modal: React.FunctionComponent<Props>;
export default Modal;
