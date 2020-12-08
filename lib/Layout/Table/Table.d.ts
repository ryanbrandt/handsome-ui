import * as React from "react";
import "./index.css";
interface Props {
    /**
     * Array containing either string or ReactNode types to be presented as
     * table headers, in order received
     */
    headers: Array<string | React.ReactNode>;
    /**
     * Children (e.g. TableRow) to be rendered within table
     */
    children: React.ReactNode | Array<React.ReactNode | JSX.Element>;
    /**
     * Optional additional CSS class to apply
     */
    className?: string;
    /**
     * Optional inline styles
     */
    style?: React.CSSProperties;
}
declare const Table: React.FunctionComponent<Props>;
export default Table;
