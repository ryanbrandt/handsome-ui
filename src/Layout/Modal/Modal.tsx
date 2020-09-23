import * as React from "react";

import "./index.css";

interface Props {
  /**
   * Flag that toggles modal visibility
   */
  open: boolean;

  /**
   * Modal heading string or JSX to be rendered
   */
  heading: string | React.ReactNode;

  /**
   * Children to render within modal
   */
  children: React.ReactNode;

  /**
   * Function to execute on Modal close
   */
  onClose: Function;
}

const Modal: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
  const renderHeading = () => {
    const { heading } = props;
    if (typeof heading === "string") {
      return (
        <div className="modal_modal_heading">
          <h1>{heading}</h1>
        </div>
      );
    }

    return heading;
  };

  const { open, onClose, children } = props;

  return (
    <div
      className={`modal_container ${!open ? "modal_closed" : ""}`}
      onClick={() => onClose()}
    >
      <div
        className="modal_modal"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <div className="modal_close" onClick={() => onClose()}>
          close
        </div>
        <div className="modal_inner">
          {renderHeading()}
          <div className="modal_modal_content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
