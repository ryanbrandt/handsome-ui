import * as React from "react";

import Column from "../Column/Column";
import { AppContext } from "../../Containers";

import "./index.css";

interface Props {
  /**
   * Children to be rendered within row
   */
  children: React.ReactNode;

  /**
   * Optional additional CSS classes
   */
  className?: string;

  /**
   * Optional inline styles
   */
  style?: React.CSSProperties;

  /**
   * Optional additional CSS classes for row in mobile
   */
  mobileClassName?: string;

  /**
   * Optional inline styles for row in mobile
   */
  mobileStyle?: React.CSSProperties;
}

const Row: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { children } = props;

  const _renderMobileRow = (): React.ReactNode => {
    const { mobileClassName, mobileStyle } = props;

    return (
      <Column className={mobileClassName} style={mobileStyle}>
        {children}
      </Column>
    );
  };

  const _renderRow = (): React.ReactNode => {
    const { className, style } = props;

    return (
      <div className={`${className ? `${className} ` : ""}row`} style={style}>
        {children}
      </div>
    );
  };

  return (
    <AppContext.Consumer>
      {(isMobile) => (isMobile ? _renderMobileRow() : _renderRow())}
    </AppContext.Consumer>
  );
};

export default Row;
