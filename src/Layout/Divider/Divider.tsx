import * as React from "react";

import "./index.css";

interface Props {
  /**
   * Optional additional CSS classes to be applied to the divider
   */
  className?: string;

  /**
   * Optional inline styling
   */
  style?: React.CSSProperties;

  /**
   * Optional flag to specify if gradient or solid variation of border
   */
  solid?: boolean;
}

const Divider: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
  const _computeClassName = (): string => {
    const { solid, className } = props;
    let classes: Array<string> = new Array<string>();

    if (className) {
      classes.push(className);
    }

    if (solid) {
      classes.push("divider_solid");
    } else {
      classes.push("divider_base");
    }

    return classes.join(" ");
  };

  const { style } = props;

  return <div className={_computeClassName()} style={style} />;
};

export default Divider;
