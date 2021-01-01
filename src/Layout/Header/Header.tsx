import * as React from "react";

import { AppContext } from "../../Containers";

import { BurgerMenu } from "../../Svgs";
import { Column } from "../../Layout";

import "./index.css";

interface Props {
  /**
   * JSX to be rendered within the menu
   */
  menu: React.ReactNode;

  /**
   * Array of values to present in the mobile menu
   */
  mobileMenu: Array<string>;

  /**
   * Function to execute on click of a mobile menu item
   */
  onMobileClick: (item: string) => void;
}

const Header: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  const _handleMobileClick = (item: string): void => {
    const { onMobileClick } = props;

    onMobileClick(item);
    setMenuOpen(false);
  };

  const _renderMobileItems = (): React.ReactNode => {
    const { mobileMenu } = props;
    return (
      <React.Fragment>
        <div className="app_mobile-escape" onClick={() => setMenuOpen(false)}>
          X
        </div>
        <div className="app_mobile-content">
          <Column>
            {mobileMenu.map((item) => (
              <h1 key={item} onClick={() => _handleMobileClick(item)}>
                {item}
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

  const _renderDefaultMenu = (): React.ReactNode => {
    const { menu } = props;

    return (
      <div className="app_header header-row">
        {menuOpen ? (
          <div className="app_menu-escape" onClick={() => setMenuOpen(false)}>
            X
          </div>
        ) : (
          <BurgerMenu
            className="app_menu-icon"
            onClick={() => setMenuOpen(true)}
          />
        )}
        <div className={menuOpen ? "app_menu-open" : "app_menu-closed"}>
          {menu}
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
