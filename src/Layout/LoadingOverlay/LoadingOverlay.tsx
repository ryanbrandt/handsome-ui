import * as React from "react";

import { Spinner } from "../../Elements";

import "./index.css";

interface Props {
  /**
   * Flag to toggle showing/hiding overlay
   */
  show: boolean;

  /**
   * Optional message to display
   */
  message?: string;
}

const LoadingOverlay: React.FunctionComponent<Props> = (
  props: Props
): JSX.Element | null => {
  const { show, message } = props;

  if (show) {
    return (
      <div className="loading_overlay-container">
        <div className="loading_overlay-content">
          <Spinner />
          {message && <h2>{message}</h2>}
        </div>
      </div>
    );
  }

  return null;
};

export default LoadingOverlay;
