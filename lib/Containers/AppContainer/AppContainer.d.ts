import * as React from "react";
import Header from "../../Layout/Header/Header";
import "../../global.css";
interface Props {
    /**
     * Children to be rendered within the app
     */
    children: React.ReactNode;
    /**
     * Header menu to be rendered within the application container
     */
    header: typeof Header;
    /**
     * Global app container css class
     */
    className?: string;
    /**
     * Global app container inline styles
     */
    style?: React.CSSProperties;
}
declare const AppContainer: React.FunctionComponent<Props>;
export default AppContainer;
