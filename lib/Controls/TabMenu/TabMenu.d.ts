import * as React from "react";
import "./index.css";
interface Tab {
    title: string;
    key: string;
}
interface Props {
    /**
     * Array of Tab items
     * These define the display value (title) and onTab argument value (key) for each tab
     */
    tabs: Array<Tab>;
    /**
     * Optional default active tab
     * If not defined, first item in Tab array will be defaulted to
     */
    defaultTab?: string;
    /**
     * Function to be executed on selection of a tab
     */
    onTab: (tabKey: string) => void;
    /**
     * Function to be executed during the search input's onChange event
     */
    onSearch: (query: string) => void;
}
declare const TabMenu: React.FunctionComponent<Props>;
export default TabMenu;
