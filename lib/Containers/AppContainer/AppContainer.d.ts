import * as React from "react";
import "../../global.css";
interface Props {
    /**
     * Children to be rendered within the app
     */
    children: React.ReactNode;
    /**
     * JSX to be rendered within the app header menu
     */
    headerMenu: React.ReactNode;
    /**
     * JSX to be rendered within the app header menu when on mobile
     */
    mobileMenu: React.ReactNode;
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
