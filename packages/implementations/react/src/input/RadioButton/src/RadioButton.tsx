import React from "react";
import { radioButton } from "@rarui/styles";
import { Text } from "@rarui-react/text";
import { RadioButtonProps } from "./radioButton.types";

const RadioButton: React.FC<RadioButtonProps> = ({
  className: _className,
  style: _style,
  id,
  name,
  disabled,
  error,
  label,
  selected,
  size = "large",
  ...rest
}) => (
  <label
    htmlFor={id || name}
    className={radioButton.classnames.container}
    aria-disabled={disabled}
  >
    <span
      data-testid="checkmark-element"
      className={radioButton.classnames.radioButton({ size, error })}
    >
      <input
        {...rest}
        id={id || name}
        name={name}
        type="radio"
        defaultChecked={selected}
        className={radioButton.classnames.input}
        disabled={disabled}
      />
    </span>
    {label && (
      <Text color="$currentColor" fontSize="$s" lineHeight="$m">
        {label}
      </Text>
    )}
  </label>
);

RadioButton.displayName = "RadioButton";

export { RadioButton };
