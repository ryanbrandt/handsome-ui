import * as React from "react";

import AppContext from "./AppContext";

import Header from "../../Layout/Header/Header";

import "../../global.css";

interface Props {
  /**
   * Children to be rendered within the app
   */
  children: React.ReactNode;

  /**
   * JSX to be rendered within the app header menu
   */
  headerMenu: React.ReactNode;

  /**
   * JSX to be rendered within the app header menu when on mobile
   */
  mobileMenu: React.ReactNode;

  /**
   * Global app container css class
   */
  className?: string;

  /**
   * Global app container inline styles
   */
  style?: React.CSSProperties;
}

const AppContainer: React.FunctionComponent<Props> = (
  props: Props
): JSX.Element => {
  const { headerMenu, mobileMenu, children, className, style } = props;

  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    _handleResize();
    window.addEventListener("resize", _handleResize);

    return () => window.removeEventListener("resize", _handleResize);
  }, []);

  const _handleResize = (): void => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  return (
    <AppContext.Provider value={isMobile}>
      <Header menu={headerMenu} mobileMenu={mobileMenu} />
      <div className={className} style={style}>
        {children}
      </div>
    </AppContext.Provider>
  );
};

export default AppContainer;
