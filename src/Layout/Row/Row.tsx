import * as React from "react";

import Column from "../Column/Column";
import { AppContext } from "../../Containers";

import "./index.css";

export enum RowVersionOptions {
  "default",
  "space-between",
}

export type RowVersion = RowVersionOptions;

interface Props {
  /**
   * Optional flex row version
   */
  version?: RowVersion;

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

  const _getVersionClassName = (version: RowVersion) => {
    switch (version) {
      case RowVersionOptions.default: {
        return "row";
      }

      case RowVersionOptions["space-between"]: {
        return "row_space-between";
      }

      default: {
        return "row";
      }
    }
  };

  const _renderMobileRow = (): React.ReactNode => {
    const { mobileClassName, mobileStyle } = props;

    return (
      <Column className={mobileClassName} style={mobileStyle}>
        {children}
      </Column>
    );
  };

  const _renderRow = (): React.ReactNode => {
    const {
      className,
      style,
      version = RowVersionOptions["space-between"],
    } = props;

    return (
      <div
        className={`${className ? `${className} ` : ""}${_getVersionClassName(
          version
        )}`}
        style={style}
      >
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
