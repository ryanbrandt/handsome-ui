import * as React from "react";

import "./index.css";
interface Props {
  /**
   * Text content of the button
   */
  title: string;

  /**
   * Function to execute on button click
   */
  onClick: Function;

  /**
   * Optional icon to display aside text in button
   */
  icon?: React.ReactNode;

  /**
   * Flag to specify if button is the color inverting style
   */
  inverting?: boolean;

  /**
   * Flag to specify if button is round style
   */
  round?: boolean;

  /**
   * Flag to specify if button is disabled; defaults to enabled
   */
  disabled?: boolean;

  /**
   * Optional additional CSS classes to apply to the button
   */
  className?: string;

  /**
   * Optional styles to be defined inline--inline styling is discouraged
   */
  style?: React.CSSProperties;
}

const Button: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement => {
  const getButtonClass = () => {
    const { inverting, round, disabled, className } = props;

    let classes: string[] = className
      ? [className, "button_common"]
      : ["button_common"];

    if (inverting) {
      classes.push("button_inverting");
    }

    if (round) {
      classes.push("button_round");
    }

    if (disabled) {
      classes.push("button_disabled");
    }

    return classes.join(" ");
  };

  const { title, onClick, icon, style } = props;

  return (
    <div
      className={getButtonClass()}
      onClick={() => onClick()}
      style={style ? style : {}}
    >
      <div className="button_content">
        {icon && <div className="button_icon">{icon}</div>}
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Button;
