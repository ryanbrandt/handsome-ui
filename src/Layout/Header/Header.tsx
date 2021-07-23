import * as React from "react";

import { useIsMobile } from "../../hooks";

import { BurgerMenu } from "../../Svgs";
import { Column, MenuOption } from "../../Layout";
interface Props {
  /**
   * JSX to be rendered within the menu
   */
  options: Array<MenuOption>;
}

const Header: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const isMobile = useIsMobile();

  const handleItemClick = (option: MenuOption): void => {
    const { action } = option;

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
            {options.map(
              (option) =>
                !option.active && (
                  <h1 key={option.name} onClick={() => handleItemClick(option)}>
                    {option.name}
                  </h1>
                )
            )}
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
      <React.Fragment>
        <div onClick={() => setMenuOpen(false)} className="app_menu-escape">
          X
        </div>
        <div className="app_menu-options app_menu">
          {options.map((option) => (
            <span
              key={option.name}
              className={
                option.active
                  ? "app_menu_active medium_text"
                  : "app_menu_option medium_text"
              }
              onClick={() => handleItemClick(option)}
            >
              {option.name}
            </span>
          ))}
        </div>
      </React.Fragment>
    );
  };

  const _renderDefaultMenu = (): React.ReactNode => {
    return (
      <div className="app_header">
        <BurgerMenu
          className={menuOpen ? "app_menu-icon-active" : "app_menu-icon"}
          onClick={() => setMenuOpen(true)}
        />
        <div className={menuOpen ? "app_menu-open" : "app_menu-closed"}>
          {_renderDefaultOptions()}
        </div>
      </div>
    );
  };

  return <>{isMobile ? _renderMobileMenu() : _renderDefaultMenu()}</>;
};

export default Header;
