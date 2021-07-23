import * as React from "react";
export declare type RowVersion = "default" | "space-between" | "space-evenly";
interface Props {
    /**
     * Children to be rendered within row
     */
    children: React.ReactNode;
    /**
     * Optional flex row version
     */
    version?: RowVersion;
    /**
     * Optional flag specifying if row is mobile-responsive
     * Defaults to true
     */
    responsive?: boolean;
    /**
     * Optional additional CSS classes
     */
    className?: string;
    /**
     * Optional inline styles
     */
    style?: React.CSSProperties;
    /**
     * Optional additional CSS classes for row in mobile
     */
    mobileClassName?: string;
    /**
     * Optional inline styles for row in mobile
     */
    mobileStyle?: React.CSSProperties;
}
declare const Row: React.FunctionComponent<Props>;
export default Row;
