import * as React from "react";

import { combineClassNames } from "../../utils/helpers";

interface Props {
  /**
   * Function to execute on button click
   */
  onClick: Function;

  /**
   * Determines if radio button is checked
   */
  checked: boolean;

  /**
   * Optional flag to disable radio button
   */
  disabled?: boolean;

  /**
   * Optional radio button label
   */
  label?: string;

  /**
   * Optional additional CSS classes
   */
  className?: string;

  /**
   * Optional inline styling
   */
  style?: React.CSSProperties;
}

const RadioButton: React.FunctionComponent<Props> = (
  props: Props
): JSX.Element => {
  const _computeRadioButtonClass = () => {
    const { disabled, checked } = props;

    let classes = ["radio_button_standard"];
    if (checked) {
      classes.push("radio_button_checked");
    }
    if (disabled) {
      classes.push("radio_button_disabled");
    }
    return classes.join(" ");
  };

  const { onClick, disabled, label, className, style } = props;

  return (
    <div className="radio_button_container">
      <div
        className={combineClassNames(_computeRadioButtonClass(), className)}
        style={style}
        onClick={() => onClick()}
      />
      {label && (
        <label
          className={`radio_button_label ${
            disabled ? "radio_button_disabled" : ""
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default RadioButton;
