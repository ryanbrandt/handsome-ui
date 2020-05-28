import * as React from "react";

import { AppContext } from "../../Containers";

import { BurgerMenu } from "../../Svgs";

import "./index.css";

interface Props {
  /**
   * JSX to be rendered within the menu
   */
  menu: React.ReactNode;

  /**
   * JSX to be rendered within the menu when on mobile
   */
  mobileMenu: React.ReactNode;
}

const Header: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { menu, mobileMenu } = props;

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);

  const _renderMobileMenu = (): JSX.Element => {
    return (
      <React.Fragment>
        <div className="app_header">
          <div className="app_mobile_icon">
            <BurgerMenu onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
          </div>
        </div>
        <div
          className={`app_mobile_menu ${mobileMenuOpen ? "open" : "closed"}`}
        >
          {mobileMenu}
        </div>
        <div className="app_header_divider" />
      </React.Fragment>
    );
  };

  return (
    <AppContext.Consumer>
      {(isMobile) =>
        isMobile ? (
          _renderMobileMenu()
        ) : (
          <React.Fragment>
            <div className="app_header">{menu}</div>
            <div className="app_header_divider" />
          </React.Fragment>
        )
      }
    </AppContext.Consumer>
  );
};

export default Header;
