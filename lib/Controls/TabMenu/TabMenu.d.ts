import * as React from "react";
interface Tab {
    title: string;
    key: string;
    active?: boolean;
}
interface Props {
    /**
     * Array of Tab items
     * These define the display value (title) and onTab argument value (key) for each tab
     */
    tabs: Array<Tab>;
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
