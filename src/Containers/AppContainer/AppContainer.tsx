import * as React from "react";

import AppContext from "./AppContext";

interface Props {
  /**
   * Children to be rendered within the app
   */
  children: React.ReactNode;

  /**
   * Optional header menu to be rendered within the application container
   */
  header?: React.ReactNode;

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
): React.ReactElement => {
  const { children, header, className, style } = props;

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
      {header}
      <div className={className} style={style}>
        {children}
      </div>
    </AppContext.Provider>
  );
};

export default AppContainer;
