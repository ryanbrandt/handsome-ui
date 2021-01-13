import * as React from "react";

import { combineClassNames } from "../../utils/helpers";

import "./index.css";

interface Props {
  /**
   * Children (e.g. TableCell) to be rendered within row
   */
  children: React.ReactNode;

  /**
   * Optional flag to specify a darkened row
   */
  darkened?: boolean;

  /**
   * Optional function to execute on row click
   */
  onClick?: Function;

  /**
   * Optional flag to disable the row
   */
  disabled?: boolean;

  /**
   * Optional CSS class to be applied
   */
  className?: string;

  /**
   * Optional inline styles
   */
  style?: React.CSSProperties;
}

const TableRow: React.FunctionComponent<Props> = (
  props: Props
): JSX.Element => {
  const { children, onClick, darkened, disabled, className, style } = props;

  let classes = ["table_row"];
  if (onClick) {
    classes.push("table_row-clickable");
  }

  if (disabled) {
    classes.push("table_row-disabled");
  }

  if (darkened) {
    classes.push("table_row_darkened");
  }
  const baseClass = classes.join(" ");

  return (
    <tr
      onClick={onClick ? () => onClick() : () => null}
      className={combineClassNames(baseClass, className)}
      style={style}
    >
      {children}
    </tr>
  );
};

export default TableRow;
