import React from "react";
import { Text } from "@rarui-react/text";
import { toggle } from "@rarui/styles";

import { ToggleProps } from "./toggle.types";

const Toggle: React.FC<ToggleProps> = ({
  className: _className,
  style: _style,
  size = "large",
  label,
  id,
  name,
  selected,
  error,
  disabled,
  ...rest
}) => (
  <label
    htmlFor={id || name}
    className={toggle.classnames.toggle({ size, error })}
    aria-disabled={disabled}
  >
    <input
      {...rest}
      id={id || name}
      name={name}
      type="checkbox"
      className={toggle.classnames.input}
      defaultChecked={selected}
      disabled={disabled}
    />
    <span
      data-testid="slider"
      className={toggle.classnames.slider({ size, error })}
      aria-disabled={disabled}
    />
    <span
      data-testid="icon"
      className={toggle.classnames.icon}
      aria-disabled={disabled}
    />
    {label && (
      <Text data-testid="text" color="$primary">
        {label}
      </Text>
    )}
  </label>
);

Toggle.displayName = "Toggle";

export { Toggle };
