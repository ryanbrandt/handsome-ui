import * as React from "react";

import * as t from "./types";

import "./index.css";
import "../../global.css";

const Button: React.FunctionComponent<t.Props> = (
  props: t.Props
): JSX.Element => {
  const getButtonClass = () => {
    const { inverting, round, disabled, className } = props;

    let classes: string[] = className
      ? [className, "buton_common"]
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
    <div className={getButtonClass()} onClick={() => onClick()} style={style}>
      <div className="button_content">
        {icon && <div className="button_icon">{icon}</div>}
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Button;
