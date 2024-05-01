import React from "react";
import { label } from "@rarui/styles";
import { LabelProps } from "./label.types";

const Label: React.FC<LabelProps> = ({
  className: _className,
  style: _style,
  children,
  htmlFor,
  hidden,
  ...props
}) => (
  <label
    {...props}
    className={label.classnames.label({ hidden })}
    htmlFor={htmlFor}
  >
    {children}
  </label>
);

Label.displayName = "Label";

export { Label };
