import * as React from "react";
import { MenuOption } from "../../Layout";
export interface Props {
    /**
     * JSX to be rendered within the menu
     */
    options: Array<MenuOption>;
}
export interface SubHeaderProps extends Props {
    onItemClick: (option: MenuOption, callback: () => void) => void;
}
declare const Header: React.FunctionComponent<Props>;
export default Header;
