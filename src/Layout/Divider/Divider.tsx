import * as React from "react";

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

  /**
   * Optional flag to specify a vertifcal divider
   */
  vertical?: boolean;
}

const Divider: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement => {
  const _computeClassName = (): string => {
    const { solid, vertical, className } = props;
    let classes: Array<string> = new Array<string>();

    if (className) {
      classes.push(className);
    }

    if (solid) {
      classes.push(vertical ? "divider_solid_vr" : "divider_solid_hr");
    } else {
      classes.push(vertical ? "divider_base_vr" : "divider_base_hr");
    }

    return classes.join(" ");
  };

  const { style } = props;

  return <div className={_computeClassName()} style={style} />;
};

export default Divider;
