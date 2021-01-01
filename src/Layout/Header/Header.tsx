import * as React from "react";

import { AppContext } from "../../Containers";

import { BurgerMenu } from "../../Svgs";
import { Column } from "../../Layout";

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

const Header: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { defaultActive } = props;

  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const [activeOption, setActiveOption] = React.useState<string | undefined>(
    defaultActive
  );

  const handleItemClick = (option: HeaderOption): void => {
    const { action } = option;

    setActiveOption(option.name);
    action();
    setMenuOpen(false);
  };

  const _renderMobileItems = (): React.ReactNode => {
    const { options } = props;

    return (
      <React.Fragment>
        <div className="app_mobile-escape" onClick={() => setMenuOpen(false)}>
          X
        </div>
        <div className="app_mobile-content">
          <Column>
            {options.map((option) => (
              <h1 key={option.name} onClick={() => handleItemClick(option)}>
                {option.name}
              </h1>
            ))}
          </Column>
        </div>
      </React.Fragment>
    );
  };

  const _renderMobileMenu = (): React.ReactNode => {
    return (
      <React.Fragment>
        <div className="app_header app_header-mobile">
          <div className="app_mobile_icon">
            <BurgerMenu onClick={() => setMenuOpen(true)} />
          </div>
        </div>
        <div className={`app_mobile_menu ${menuOpen ? "open" : "closed"}`}>
          {_renderMobileItems()}
        </div>
      </React.Fragment>
    );
  };

  const _renderDefaultOptions = (): React.ReactNode => {
    const { options } = props;

    return (
      <div className="app_menu-options app_menu">
        {options.map((option) => (
          <span
            key={option.name}
            className={
              option.name === activeOption
                ? "app_menu_active medium_text"
                : "app_menu_option medium_text"
            }
            onClick={() => handleItemClick(option)}
          >
            {option.name}
          </span>
        ))}
      </div>
    );
  };

  const _renderDefaultMenu = (): React.ReactNode => {
    return (
      <div className="app_header header-row">
        <BurgerMenu
          className={menuOpen ? "app_menu-icon-active" : "app_menu-icon"}
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <div className={menuOpen ? "app_menu-open" : "app_menu-closed"}>
          {_renderDefaultOptions()}
        </div>
      </div>
    );
  };

  return (
    <AppContext.Consumer>
      {(isMobile) => (isMobile ? _renderMobileMenu() : _renderDefaultMenu())}
    </AppContext.Consumer>
  );
};

export default Header;
