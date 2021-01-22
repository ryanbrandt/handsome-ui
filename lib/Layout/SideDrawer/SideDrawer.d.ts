import * as React from "react";
import "./index.css";
interface Props {
    /**
     * Flag controlling visibility of the side drawer
     */
    visible: boolean;
    /**
     * Children to be rendered within the side drawer
     */
    children: React.ReactNode;
    /**
     * Optional function to execute on side drawer close click.
     * If undefined, close button is not displayed.
     */
    onClose?: Function;
    /**
     * Optional prop to customize the side on which the drawer appears
     * Defaults left
     */
    side?: "left" | "right";
}
declare const SideDrawer: React.FunctionComponent<Props>;
export default SideDrawer;
