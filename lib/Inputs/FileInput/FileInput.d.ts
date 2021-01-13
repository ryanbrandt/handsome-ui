import * as React from "react";
import "./index.css";
interface Props {
    /**
     * Function to execute on file selection change
     */
    onChange: (files: Array<File>) => void;
    /**
     * Optional label for file selector
     */
    label?: string;
    /**
     * Flag indicating whether multiple files may be selected
     */
    multiple?: boolean;
    /**
     * Optional string defining accepted file type (e.g. image/png)
     */
    accept?: string;
    /**
     * Optional error string associated with the user input
     */
    error?: string;
}
declare const FileInput: React.FunctionComponent<Props>;
export default FileInput;
