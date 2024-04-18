import React from "react";
import { checkbox } from "@rarui/styles";
import { Text } from "@rarui-react/text";
import { CheckboxProps } from "./checkbox.types";

const Checkbox: React.FC<CheckboxProps> = ({
  className: _className,
  style: _style,
  id,
  label,
  error,
  disabled,
  size = "medium",
  indeterminate = false,
  ...props
}) => (
  <label htmlFor={id} className={checkbox.classnames.label({ error })}>
    <div className={checkbox.classnames.container}>
      <input
        {...props}
        type="checkbox"
        id={id}
        className={checkbox.classnames.checkbox({
          error,
          size,
          indeterminate,
        })}
        disabled={disabled}
      />
      <span className={checkbox.classnames.overlay} />
    </div>
    {label && <Text color="$primary">{label}</Text>}
  </label>
);

Checkbox.displayName = "Checkbox";
export { Checkbox };
