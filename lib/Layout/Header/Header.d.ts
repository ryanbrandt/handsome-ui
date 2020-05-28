import * as React from "react";
import "./index.css";
interface Props {
    /**
     * JSX to be rendered within the menu
     */
    menu: React.ReactNode;
    /**
     * JSX to be rendered within the menu when on mobile
     */
    mobileMenu: React.ReactNode;
}
declare const Header: React.FunctionComponent<Props>;
export default Header;
