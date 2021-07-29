import * as React from "react";

import { combineClassNames } from "../../utils/helpers";

interface Props {
  /**
   * Array containing either string or ReactNode types to be presented as
   * table headers, in order received
   */
  headers: Array<string | React.ReactNode>;

  /**
   * Children (e.g. TableRow) to be rendered within table
   */
  children: React.ReactNode | Array<React.ReactNode | React.ReactElement>;

  /**
   * Optional additional CSS class to apply
   */
  className?: string;

  /**
   * Optional inline styles
   */
  style?: React.CSSProperties;
}

const Table: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement => {
  const _renderHeader = (header: string | React.ReactNode, i: number) => {
    if (typeof header === "string") {
      return (
        <th
          key={`table_header_${header}`}
          className="table_header"
          align="left"
        >
          {header}
        </th>
      );
    }

    return <th key={`table_header_${i}`}>{header}</th>;
  };

  const _renderTableHeaders = (): React.ReactNode => {
    const { headers } = props;

    return (
      <thead>
        <tr className="table_row-header">
          {headers.map((header: string | React.ReactNode, i: number) =>
            _renderHeader(header, i)
          )}
        </tr>
      </thead>
    );
  };

  const { children, className, style } = props;

  return (
    <table
      className={combineClassNames("table_table`", className)}
      style={style}
    >
      {_renderTableHeaders()}
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
