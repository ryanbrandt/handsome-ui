import * as React from "react";

import { combineClassNames } from "../../utils/helpers";

export const TEST_ID = "modal";

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

const Modal: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement | null => {
  const topDivRef = React.createRef<HTMLDivElement>();

  const { open } = props;

  React.useEffect(() => {
    if (topDivRef.current && topDivRef.current.scroll) {
      topDivRef.current.scroll({ top: 0, behavior: "smooth" });
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

  if (open) {
    return (
      <div
        data-testid={TEST_ID}
        className="modal_container"
        onClick={() => onClose()}
      >
        <div
          ref={topDivRef}
          className={combineClassNames(
            "modal_modal handsome_scroll",
            modalClassName
          )}
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
  }

  return null;
};

export default Modal;
