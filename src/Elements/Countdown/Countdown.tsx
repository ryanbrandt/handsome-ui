import React, { useEffect, useState } from "react";

import { combineClassNames } from "../../utils/helpers";

export const TEST_ID = "countdown";

interface Props {
  /**
   * Initial count to countdown from, in seconds
   */
  initialCount: number;

  /**
   * Optional function to execute on countdown completion
   */
  onCompletion?: Function;

  /**
   * Optional flag to run the countdown on repeat inifintely
   */
  infinite?: boolean;

  /**
   * Optional additional css classes to be applied
   */
  className?: string;

  /**
   * Optional inline styling to be applied
   */
  style?: React.CSSProperties;
}

const Countdown: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement => {
  const { initialCount } = props;

  const [count, setCount] = useState<number>(initialCount);

  useEffect(() => {
    const { onCompletion, infinite } = props;

    const countdownInterval = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        if (infinite) {
          setCount(initialCount);
        }

        if (onCompletion) {
          onCompletion();
        }
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [count]);

  const { className, style } = props;

  const composedClassName = combineClassNames("countdown-container", className);

  return (
    <h1 data-testid={TEST_ID} style={style} className={composedClassName}>
      {count}
    </h1>
  );
};

export default Countdown;
