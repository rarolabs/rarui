import React from "react";
import { input } from "@rarui/styles";
import { InputLeadingProps } from "./leading.types";

const InputLeading: React.FC<InputLeadingProps> = ({
  className: _className,
  style: _style,
  children,
  appearance,
  size,
  divider,
  position,
  ...props
}) => (
  <button
    {...props}
    type="button"
    className={input.classnames.leading({
      appearance,
      size,
      divider,
      position,
    })}
  >
    {children}
  </button>
);

InputLeading.displayName = "Input.Leading";

export { InputLeading };
