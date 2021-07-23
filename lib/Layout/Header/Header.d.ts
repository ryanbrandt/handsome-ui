import * as React from "react";
import { MenuOption } from "../../Layout";
interface Props {
    /**
     * JSX to be rendered within the menu
     */
    options: Array<MenuOption>;
}
declare const Header: React.FunctionComponent<Props>;
export default Header;
