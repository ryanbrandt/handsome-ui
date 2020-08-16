import * as React from "react";

import { Input } from "../../Inputs";
import { Search } from "../../Svgs";

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

const TabMenu: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { defaultTab, tabs } = props;
  const [activeTab, setActiveTab] = React.useState<string>(
    defaultTab ? defaultTab : tabs[0].key
  );

  const _handleTabChange = (tabKey: string): void => {
    const { onTab } = props;

    setActiveTab(tabKey);
    onTab(tabKey);
  };

  const _renderTabs = (): React.ReactNode => {
    return tabs.map((tab) => (
      <div
        className={
          activeTab === tab.key ? "tab_menu_tab-active" : "tab_menu_tab"
        }
        onClick={() => _handleTabChange(tab.key)}
      >
        {tab.title}
      </div>
    ));
  };

  const { onSearch } = props;

  return (
    <div className="tab_menu-container">
      <div className="tab_menu_tab-container">{_renderTabs()}</div>
      <Input
        placeholder="Search"
        onChange={onSearch}
        iconLeft={<Search width={12} height={12} />}
      />
    </div>
  );
};

export default TabMenu;
