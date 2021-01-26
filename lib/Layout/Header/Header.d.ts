import * as React from "react";
import { MenuOption } from "../../Layout";
import "./index.css";
interface Props {
    /**
     * JSX to be rendered within the menu
     */
    options: Array<MenuOption>;
}
declare const Header: React.FunctionComponent<Props>;
export default Header;
