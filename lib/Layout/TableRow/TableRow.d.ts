import * as React from "react";
interface Props {
    /**
     * Children (e.g. TableCell) to be rendered within row
     */
    children: React.ReactNode;
    /**
     * Optional flag to specify a darkened row
     */
    darkened?: boolean;
    /**
     * Optional function to execute on row click
     */
    onClick?: Function;
    /**
     * Optional flag to disable the row
     */
    disabled?: boolean;
    /**
     * Optional CSS class to be applied
     */
    className?: string;
    /**
     * Optional inline styles
     */
    style?: React.CSSProperties;
}
declare const TableRow: React.FunctionComponent<Props>;
export default TableRow;
