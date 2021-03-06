import * as React from "react";

import AppContext from "../../Containers/AppContainer/AppContext";
import { Input } from "../../Inputs";
import { Search } from "../../Svgs";
import { Column, Row } from "../../Layout";
import { Dropdown } from "../../Containers";

import "./index.css";

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

const TabMenu: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement => {
  const { tabs } = props;

  const _handleTabChange = (tabKey: string): void => {
    const { onTab } = props;

    onTab(tabKey);
  };

  const _renderTabs = (): React.ReactNode => {
    return tabs.map((tab) => (
      <div
        className={tab.active ? "tab_menu_tab-active" : "tab_menu_tab"}
        key={tab.title}
        onClick={() => _handleTabChange(tab.key)}
      >
        {tab.title}
      </div>
    ));
  };

  const _renderMobileTabs = (): React.ReactNode => {
    return (
      <div className="tab_menu-dropdown-container">
        <Dropdown heading="Filter By">
          <Column className="tab_menu-mobile-container">{_renderTabs()}</Column>
        </Dropdown>
      </div>
    );
  };

  const { onSearch } = props;

  return (
    <AppContext.Consumer>
      {(isMobile) => (
        <Row>
          <div>{isMobile ? _renderMobileTabs() : _renderTabs()}</div>
          <Input
            type="search"
            placeholder="Search"
            onChange={onSearch}
            iconLeft={<Search width={12} height={12} />}
          />
        </Row>
      )}
    </AppContext.Consumer>
  );
};

export default TabMenu;
