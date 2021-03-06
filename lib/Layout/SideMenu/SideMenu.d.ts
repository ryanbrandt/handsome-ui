import * as React from "react";
import { MenuOption } from "../types";
import "./index.css";
interface Props {
    options: Array<MenuOption>;
    open: boolean;
}
declare const SideMenu: React.FunctionComponent<Props>;
export default SideMenu;
