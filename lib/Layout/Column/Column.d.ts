import * as React from "react";
interface Props {
    /**
     * Children to be rendered within the column
     */
    children: React.ReactNode;
    /**
     * Optional additional CSS classes
     */
    className?: string;
    /**
     * Optional inline styles
     */
    style?: React.CSSProperties;
}
declare const Column: React.FunctionComponent<Props>;
export default Column;
