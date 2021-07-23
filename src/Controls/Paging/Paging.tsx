import * as React from "react";

import { Chevron } from "../../Svgs";
import { combineClassNames } from "../../utils/helpers";

interface Props {
  /**
   * Function to execute on "next" page click
   */
  onNext: Function;

  /**
   * Function to execute on "prev" page click
   */
  onPrev: Function;

  /**
   * Number representing the current page
   */
  page: number;

  /**
   * Number representing the total number of pages
   */
  totalPages: number;
}

const Paging: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement => {
  const _getButtonClassModifier = (disabled?: boolean): string => {
    let modifier = "";
    if (disabled) {
      modifier = "page-disabled";
    }

    return modifier;
  };

  const { page, totalPages } = props;

  const _renderPreviousSection = (): React.ReactNode => {
    const { onPrev } = props;
    const disabled = page === 1;

    let prevFn = () => onPrev();
    if (disabled) {
      prevFn = () => null;
    }

    return (
      <div
        onClick={prevFn}
        className={combineClassNames(
          "paging_controller-button page-left",
          _getButtonClassModifier(disabled)
        )}
      >
        <Chevron width={8} height={8} transform="rotate(90)" />
      </div>
    );
  };

  const _renderNextSection = (): React.ReactNode => {
    const { onNext } = props;
    const disabled = page === totalPages;

    let nextFn = () => onNext();
    if (disabled) {
      nextFn = () => null;
    }

    return (
      <div
        onClick={nextFn}
        className={combineClassNames(
          "paging_controller-button page-right",
          _getButtonClassModifier(disabled)
        )}
      >
        <Chevron width={8} height={8} transform="rotate(270)" />
      </div>
    );
  };

  return (
    <div className="paging_controller-container">
      {_renderPreviousSection()}
      <div className="paging_controller-display">
        {page} of {totalPages}
      </div>
      {_renderNextSection()}
    </div>
  );
};

export default Paging;
