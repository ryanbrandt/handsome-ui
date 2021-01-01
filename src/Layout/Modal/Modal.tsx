import * as React from "react";

import { combineClassNames } from "../../utils/helpers";

import "./index.css";

interface Props {
  /**
   * Flag that toggles modal visibility
   */
  open: boolean;

  /**
   * Children to render within modal
   */
  children: React.ReactNode;

  /**
   * Function to execute on Modal close
   */
  onClose: Function;

  /**
   * Modal heading string or JSX to be rendered
   */
  heading?: string | React.ReactNode;

  /**
   * Optional additional modal CSS classes
   */
  modalClassName?: string;
}

const Modal: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
  const topDivRef = React.createRef<HTMLDivElement>();

  const { open } = props;

  React.useEffect(() => {
    if (topDivRef && topDivRef.current) {
      topDivRef.current.scroll({ top: 0, behavior: "smooth" });
    }

    if (open) {
      document.getElementsByTagName("body")[0].style.overflowY = "hidden";
      document.getElementsByTagName("html")[0].style.overflowY = "hidden";
    } else {
      document.getElementsByTagName("body")[0].removeAttribute("style");
      document.getElementsByTagName("html")[0].removeAttribute("style");
    }
  }, [open]);

  const renderHeading = () => {
    const { heading } = props;
    if (!heading || typeof heading === "string") {
      return (
        <div className="modal_modal_heading">
          <h1>{heading}</h1>
        </div>
      );
    }

    return heading;
  };

  const { modalClassName, onClose, children } = props;

  return (
    <div
      className={`modal_container ${!open ? "modal_closed" : ""}`}
      onClick={() => onClose()}
    >
      <div
        ref={topDivRef}
        className={combineClassNames("modal_modal", modalClassName)}
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
