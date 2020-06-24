import * as React from "react";

import { AppContext } from "../../Containers";

import "./index.css";

interface Props {
  /**
   * Optional value, should be defined if textarea is controlled with onChange fn
   */
  value?: string | number;

  /**
   * Optional default textarea value
   */
  defaultValue?: string | number;

  /**
   * Optional onChange fn to execute on value change
   */
  onChange?: Function;

  /**
   * Optional onBlur fn to execute on textarea blur
   */
  onBlur?: Function;

  /**
   * Optional textarea label
   */
  label?: string;

  /**
   * Optional textarea help text
   */
  help?: string;

  /**
   * Optional textarea placeholder
   */
  placeholder?: string;

  /**
   * Optional error text to display
   */
  error?: string;

  /**
   * Optional flag to disable textarea
   */
  disabled?: boolean;

  /**
   * Optional textarea additional CSS classes
   */
  className?: string;

  /**
   * Optional textarea inline styles
   */
  style?: React.CSSProperties;

  /**
   * Optional textarea container CSS classes
   */
  containerClassName?: string;

  /**
   * Optional textarea container inline styles
   */
  containerStyle?: React.CSSProperties;
}

const Text: React.FunctionComponent<Props> = (props: Props): JSX.Element => {
  const _renderText = (): React.ReactNode => {
    const {
      value,
      defaultValue,
      onChange,
      onBlur,
      placeholder,
      className,
      style,
      error,
      disabled,
    } = props;

    let valueProps = {};
    if (value !== undefined) {
      valueProps["value"] = value;
    } else if (defaultValue !== undefined) {
      valueProps["defaultValue"] = defaultValue;
    }

    let classes = ["text_text"];
    if (error) {
      classes.push("text_text_errored");
    }
    if (disabled) {
      classes.push("text_text_disabled");
    }
    const baseClass = classes.join(" ");

    return (
      <textarea
        placeholder={placeholder}
        className={`${className ? `${className} ` : ""}${baseClass}`}
        style={style}
        onChange={
          onChange
            ? (e: React.FormEvent<HTMLTextAreaElement>) =>
                onChange(e.currentTarget.value)
            : () => null
        }
        onBlur={
          onBlur
            ? (e: React.FormEvent<HTMLTextAreaElement>) =>
                onBlur(e.currentTarget.value)
            : () => null
        }
        disabled={disabled}
        {...valueProps}
      />
    );
  };

  const _renderTextContainer = (isMobile: boolean): React.ReactNode => {
    const { label, help, error, containerClassName, containerStyle } = props;

    let className = "text_container";
    if (isMobile) {
      className = "text_container_mobile";
    }

    return (
      <div
        className={`${
          containerClassName ? `${containerClassName} ` : ""
        }${className}`}
        style={containerStyle}
      >
        {label && <label className="text_label">{label}</label>}
        {_renderText()}
        {help && <label className="text_help">{help}</label>}
        {error && <label className="text_error">{error}</label>}
      </div>
    );
  };

  return (
    <AppContext.Consumer>
      {(isMobile) => _renderTextContainer(isMobile)}
    </AppContext.Consumer>
  );
};

export default Text;
