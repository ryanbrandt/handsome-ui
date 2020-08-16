import * as React from "react";
import "./index.css";
interface Props {
    /**
     * JSX to be rendered within the menu
     */
    menu: React.ReactNode;
    /**
     * Array of values to present in the mobile menu
     */
    mobileMenu: Array<string>;
    /**
     * Function to execute on click of a mobile menu item
     */
    onMobileClick: (item: string) => void;
}
declare const Header: React.FunctionComponent<Props>;
export default Header;
