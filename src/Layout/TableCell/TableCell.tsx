import * as React from "react";

import { combineClassNames } from "../../utils/helpers";

interface Props {
  /**
   * Optional children to be rendered within table cell
   *
   * Can also be used as an empty cell
   */
  children?: React.ReactNode;

  /**
   * Optional CSS class to apply
   */
  className?: string;

  /**
   * Optional inline styles
   */
  style?: React.CSSProperties;
}

const TableCell: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement => {
  const { children, className, style } = props;

  return (
    <td className={combineClassNames("table_cell", className)} style={style}>
      {children}
    </td>
  );
};

export default TableCell;
