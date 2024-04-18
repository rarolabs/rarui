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
  ...rest
}) => (
  <label htmlFor={id || name} className={toggle.classnames.container}>
    <input
      {...rest}
      id={id || name}
      name={name}
      type="checkbox"
      className={toggle.classnames.container__input}
      defaultChecked={selected}
    />
    <span
      data-testid="slider"
      className={toggle.classnames.container__slider({ size, error })}
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
