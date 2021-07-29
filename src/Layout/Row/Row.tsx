import * as React from "react";

import { useIsMobile } from "../../hooks";

import Column from "../Column/Column";

import { combineClassNames } from "../../utils/helpers";

export const TEST_ID = "row";

export type RowVersion = "default" | "space-between" | "space-evenly";

interface Props {
  /**
   * Children to be rendered within row
   */
  children: React.ReactNode;

  /**
   * Optional flex row version
   */
  version?: RowVersion;

  /**
   * Optional flag specifying if row is mobile-responsive
   * Defaults to true
   */
  responsive?: boolean;

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

const Row: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement => {
  const isMobile = useIsMobile();

  const { children } = props;

  const _getVersionClassName = (version: RowVersion) => {
    switch (version) {
      case "default": {
        return "row";
      }

      case "space-between": {
        return "row_space-between";
      }

      case "space-evenly": {
        return "row_space-evenly";
      }

      default: {
        return "row";
      }
    }
  };

  const _renderMobileRow = (): React.ReactElement => {
    const { mobileClassName, mobileStyle } = props;

    return (
      <Column className={mobileClassName} style={mobileStyle}>
        {children}
      </Column>
    );
  };

  const _renderRow = (): React.ReactElement => {
    const { className, style, version = "default" } = props;

    const rowClassName = combineClassNames(
      _getVersionClassName(version),
      className
    );

    return (
      <div data-testid={TEST_ID} className={rowClassName} style={style}>
        {children}
      </div>
    );
  };

  const { responsive = true } = props;

  let renderFn = _renderRow;
  if (isMobile && responsive) {
    renderFn = _renderMobileRow;
  }

  return renderFn();
};

export default Row;
