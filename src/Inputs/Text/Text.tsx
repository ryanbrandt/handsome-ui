import * as React from "react";

import { useIsMobile } from "../../hooks";

import { combineClassNames } from "../../utils/helpers";

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

const Text: React.FunctionComponent<Props> = (
  props: Props
): React.ReactElement => {
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
        className={combineClassNames(baseClass, className)}
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

  const isMobile = useIsMobile();

  const { label, help, error, containerClassName, containerStyle } = props;

  let baseClass = "text_container";
  if (isMobile) {
    baseClass = "text_container_mobile";
  }

  return (
    <div
      className={combineClassNames(baseClass, containerClassName)}
      style={containerStyle}
    >
      {label && <label className="text_label">{label}</label>}
      {_renderText()}
      {help && <span className="text_help">{help}</span>}
      {error && <span className="text_error">{error}</span>}
    </div>
  );
};

export default Text;
