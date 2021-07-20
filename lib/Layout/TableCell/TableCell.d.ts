import * as React from "react";
interface Props {
    /**
     * Optional children to be rendered within table cell
     *
     * Can also be used as an empty cell
     */
    children?: React.ReactNode;
    /**
     * Optional CSS class to apply
     */
    className?: string;
    /**
     * Optional inline styles
     */
    style?: React.CSSProperties;
}
declare const TableCell: React.FunctionComponent<Props>;
export default TableCell;
