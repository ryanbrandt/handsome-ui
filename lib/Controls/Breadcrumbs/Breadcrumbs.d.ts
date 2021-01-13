import * as React from "react";
import "./index.css";
interface Crumb {
    title: string;
    action: Function;
    disabled?: boolean;
}
interface Props {
    /**
     * Array of Crumb to populate breadcrumbs
     */
    crumbs: Array<Crumb>;
    /**
     * Optional flag to show/hide
     */
    show?: boolean;
}
declare const Breadcrumbs: React.FunctionComponent<Props>;
export default Breadcrumbs;
