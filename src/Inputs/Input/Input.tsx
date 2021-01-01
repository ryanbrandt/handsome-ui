import * as React from "react";

import { AppContext } from "../../Containers";

import "./index.css";

type InputType = "text" | "search" | "password" | "number" | "date";

interface Props {
  /**
   * Optional value, should be defined if input is controlled with onChange fn
   */
  value?: string | number;

  /**
   * Optional default input value
   */
  defaultValue?: string | number;

  /**
   * Optional onChange fn to execute on value change
   */
  onChange?: Function;

  /**
   * Optional onBlur fn to execute on input blur
   */
  onBlur?: Function;

  /**
   * Optional input label
   */
  label?: string;

  /**
   * Optional input help text
   */
  help?: string;

  /**
   * Optional input placeholder
   */
  placeholder?: string;

  /**
   * Optional input type, defaults text
   */
  type?: InputType;

  /**
   * Optional left icon
   */
  iconLeft?: React.ReactNode;

  /**
   * Optional error text to display
   */
  error?: string;

  /**
   * Optional flag to disable input
   */
  disabled?: boolean;

  /**
   * Optional input additional CSS classes
   */
  className?: string;

  /**
   * Optional input inline styles
   */
  style?: React.CSSProperties;

  /**
   * Optional contaier additional CSS classes
   */
  containerClassName?: string;

  /**
   * Optional container inline styles
   */
  containerStyle?: React.CSSProperties;
}

const Input: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
  const { iconLeft, error, disabled, className } = props;

  const _computeInputClassname = (): string => {
    const classes: string[] = [];

    if (className) {
      classes.push(className);
    }

    classes.push("input_input");

    if (iconLeft) {
      classes.push("input_input_icon_left");
    }

    if (disabled) {
      classes.push("input_input_disabled");
    }

    if (error) {
      classes.push("input_input_errored");
    }

    return classes.join(" ");
  };
  const _renderInput = (): React.ReactNode => {
    const {
      value,
      defaultValue,
      onChange,
      onBlur,
      placeholder,
      help,
      type,
      style,
    } = props;

    let valueProps = {};
    if (value !== undefined) {
      valueProps["value"] = value;
    } else if (defaultValue !== undefined) {
      valueProps["defaultValue"] = defaultValue;
    }

    return (
      <div className="input_input_wrapper">
        {iconLeft && <span className="input_icon_left">{iconLeft}</span>}
        <input
          className={_computeInputClassname()}
          style={style}
          type={type ? type : "text"}
          placeholder={placeholder ? placeholder : ""}
          onChange={
            onChange
              ? (e: React.FormEvent<HTMLInputElement>) =>
                  onChange(e.currentTarget.value)
              : () => null
          }
          onBlur={
            onBlur
              ? (e: React.FormEvent<HTMLInputElement>) =>
                  onBlur(e.currentTarget.value)
              : () => null
          }
          {...valueProps}
        />
        {help && <span className="input_help">{help}</span>}
        {error && <span className="input_error">{error}</span>}
      </div>
    );
  };

  const _renderInputContainer = (isMobile: boolean): React.ReactNode => {
    const { containerClassName, containerStyle, label } = props;

    let className = "input_container";
    if (isMobile) {
      className = "input_container_mobile";
    }

    return (
      <div
        className={`${
          containerClassName ? `${containerClassName} ` : ""
        }${className}`}
        style={containerStyle}
      >
        {label && <label className="input_label">{label}</label>}
        {_renderInput()}
      </div>
    );
  };
  return (
    <AppContext.Consumer>
      {(isMobile) => _renderInputContainer(isMobile)}
    </AppContext.Consumer>
  );
};

export default Input;
