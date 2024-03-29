import * as React from "react";

import { Spinner } from "../../Elements";

export const TEST_ID = "loadingOverlay";

interface Props {
  /**
   * Flag to toggle showing/hiding overlay
   */
  show: boolean;

  /**
   * Optional message to display
   */
  message?: string;

  /**
   * Optional flag to give overlay fade in/out effect
   */
  fade?: boolean;
}

const LoadingOverlay: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement | null => {
  const { show, message, fade } = props;

  let additionalStyles = "";
  if (fade) {
    additionalStyles = "fadeable-content";
  }

  return (
    <div
      data-testid={TEST_ID}
      className={`loading_overlay-container ${
        show ? "revealed" : "hidden"
      } ${additionalStyles}`}
    >
      <div className="loading_overlay-content">
        <Spinner />
        {message && <h2>{message}</h2>}
      </div>
    </div>
  );
};

export default LoadingOverlay;
