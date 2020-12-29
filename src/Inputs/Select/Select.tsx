import * as React from "react";

import { combineClassNames } from "../../utils/helpers";

import "./index.css";

interface Option {
  value: string;
  label: string;
}

interface Props {
  /**
   * Options to be available under the select
   */
  options: Array<string | Option>;

  /**
   * Select value, should be controled (e.g. on parent component state)
   */
  value: string;

  /**
   * Function to be executed on value change
   */
  onChange: Function;

  /**
   * Optional label
   */
  label?: string;

  /**
   * Optional disabled flag
   */
  disabled?: boolean;

  /**
   * Optional error to display
   */
  error?: string;

  /**
   * Optional additional container CSS classes
   */
  containerClasses?: string;

  /**
   * Optional additional select classes
   */
  selectClasses?: string;
}

const Select: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { options, value, onChange, label, error, containerClasses } = props;

  const getSelectClasses = () => {
    const { selectClasses, disabled } = props;

    const classes: string[] = ["select_select"];

    if (disabled) {
      classes.push("select_select_disabled");
    }

    return combineClassNames(classes.join(" "), selectClasses);
  };

  return (
    <div className={combineClassNames("select_container", containerClasses)}>
      {label && <label className="select_label">{label}</label>}
      <select
        value={value}
        className={getSelectClasses()}
        onChange={(e: React.FormEvent<HTMLSelectElement>) =>
          onChange(e.currentTarget.value)
        }
      >
        <option value="">--</option>
        {options.map((option: string | Option, i: number) => {
          let listOption;
          if (typeof option === "string") {
            listOption = (
              <option key={`${option}_${i}`} value={option}>
                {option}
              </option>
            );
          } else if (
            typeof option === "object" &&
            "label" in option &&
            "value" in option
          ) {
            listOption = (
              <option key={`${option.value}_${i}`} value={option.value}>
                {option.label}
              </option>
            );
          }
          return listOption;
        })}
      </select>
      {error && <span className="select_error">{error}</span>}
    </div>
  );
};

export default Select;
