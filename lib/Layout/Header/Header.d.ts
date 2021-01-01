import * as React from "react";
import "./index.css";
interface HeaderOption {
    [key: string]: any;
    name: string;
    action: Function;
}
interface Props {
    /**
     * JSX to be rendered within the menu
     */
    options: Array<HeaderOption>;
    /**
     * Optional default active option
     */
    defaultActive?: string;
}
declare const Header: React.FunctionComponent<Props>;
export default Header;
