import * as React from "react";
interface Crumb {
    title: string;
    action?: Function;
    disabled?: boolean;
}
interface Props {
    /**
     * Array of Crumb to populate breadcrumbs
     */
    crumbs: Array<Crumb>;
}
declare const Breadcrumbs: React.FunctionComponent<Props>;
export default Breadcrumbs;
