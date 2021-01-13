import * as React from "react";
import "./index.css";
interface HeaderOption {
    [key: string]: any;
    name: string;
    action: Function;
    active?: boolean;
}
interface Props {
    /**
     * JSX to be rendered within the menu
     */
    options: Array<HeaderOption>;
}
declare const Header: React.FunctionComponent<Props>;
export default Header;
