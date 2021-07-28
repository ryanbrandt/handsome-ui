import * as React from "react";

import { combineClassNames } from "../../utils/helpers";

export const TEST_ID = "bounceLoader";

interface Props {
  /**
   * Optional custom CSS classes
   */
  className?: string;
}

const BounceLoader: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement => {
  const { className } = props;

  const containerClassName = combineClassNames("bounce_loader", className);

  return (
    <div data-testid={TEST_ID} className={containerClassName}>
      <div className="bounce-circle1"></div>
      <div className="bounce-circle2"></div>
      <div className="bounce-circle3"></div>
    </div>
  );
};

export default BounceLoader;
