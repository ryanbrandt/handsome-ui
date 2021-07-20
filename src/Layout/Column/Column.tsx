import * as React from "react";

interface Props {
  /**
   * Children to be rendered within the column
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
}

const Column: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement => {
  const { children, className, style } = props;

  return (
    <div className={`${className ? `${className} ` : ""}column`} style={style}>
      {children}
    </div>
  );
};

export default Column;
