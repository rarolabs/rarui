import React from "react";
import { input } from "@rarui/styles";
import { LeadingProps } from "./leading.types";

const Leading: React.FC<LeadingProps> = ({
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

Leading.displayName = "Input.Leading";

export { Leading };
