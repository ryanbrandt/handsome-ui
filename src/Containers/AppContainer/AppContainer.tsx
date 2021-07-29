import * as React from "react";
import { useIsMobile, useWindowSize, useDebounce } from "../../hooks";

import { AppContext, IExtensibleAppContext } from "../../contexts";

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

  /**
   * Optional additional contexts to provide
   */
  additionalContext?: IExtensibleAppContext;
}

const AppContainer: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement => {
  const { children, header, className, style, additionalContext = {} } = props;

  const debouncedWindowSize = useDebounce(useWindowSize());
  const isMobile = useIsMobile();

  return (
    <AppContext.Provider
      value={{
        windowSize: debouncedWindowSize,
        isMobile: isMobile,
        ...additionalContext,
      }}
    >
      {header}
      <div className={className} style={style}>
        {children}
      </div>
    </AppContext.Provider>
  );
};

export default AppContainer;
