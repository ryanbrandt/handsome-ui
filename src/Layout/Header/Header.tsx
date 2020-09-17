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
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);

  const _handleMobileClick = (item: string) => {
    const { onMobileClick } = props;

    onMobileClick(item);
    setMobileMenuOpen(false);
  };

  const _renderMobileItems = (): React.ReactNode => {
    const { mobileMenu } = props;
    return (
      <React.Fragment>
        <div
          className="app_mobile-escape"
          onClick={() => setMobileMenuOpen(false)}
        >
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

  const _renderMobileMenu = (): JSX.Element => {
    return (
      <React.Fragment>
        <div className="app_header">
          <div className="app_mobile_icon">
            <BurgerMenu onClick={() => setMobileMenuOpen(true)} />
          </div>
        </div>
        <div
          className={`app_mobile_menu ${mobileMenuOpen ? "open" : "closed"}`}
        >
          {_renderMobileItems()}
        </div>
      </React.Fragment>
    );
  };

  const { menu } = props;

  return (
    <AppContext.Consumer>
      {(isMobile) =>
        isMobile ? (
          _renderMobileMenu()
        ) : (
          <React.Fragment>
            <div className="app_header">{menu}</div>
          </React.Fragment>
        )
      }
    </AppContext.Consumer>
  );
};

export default Header;
