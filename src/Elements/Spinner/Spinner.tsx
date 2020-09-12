import * as React from "react";

import "./index.css";

interface Props {
  /**
   * Optional custom CSS classes
   */
  className?: string;
}

const Spinner: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { className } = props;

  return <div className={`${className ? `${className} ` : ""}spinner`} />;
};

export default Spinner;
