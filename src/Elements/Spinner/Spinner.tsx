import * as React from "react";
import { combineClassNames } from "../../utils/helpers";

import "./index.css";

interface Props {
  /**
   * Optional custom CSS classes
   */
  className?: string;
}

const Spinner: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement => {
  const { className } = props;

  const containerClassName = combineClassNames("spinner-circle", className);

  return (
    <div className={containerClassName}>
      <div className="spinner-circle1 spinner-child"></div>
      <div className="spinner-circle2 spinner-child"></div>
      <div className="spinner-circle3 spinner-child"></div>
      <div className="spinner-circle4 spinner-child"></div>
      <div className="spinner-circle5 spinner-child"></div>
      <div className="spinner-circle6 spinner-child"></div>
      <div className="spinner-circle7 spinner-child"></div>
      <div className="spinner-circle8 spinner-child"></div>
      <div className="spinner-circle9 spinner-child"></div>
      <div className="spinner-circle10 spinner-child"></div>
      <div className="spinner-circle11 spinner-child"></div>
      <div className="spinner-circle12 spinner-child"></div>
    </div>
  );
};

export default Spinner;
