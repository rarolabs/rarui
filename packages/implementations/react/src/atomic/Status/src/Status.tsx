import React from "react";
import { status } from "@rarui/styles";
import { StatusProps } from "./status.types";

const Status: React.FC<StatusProps> = ({
  className: _className,
  style: _style,
  appearance = "success",
  size = "normal",
  variant = "solid",
  dot = true,
  full,
  children,
  ...props
}) => (
  <div
    className={status.classnames.status({
      size,
      variant,
      appearance,
      full,
    })}
    {...props}
  >
    {dot && (
      <span
        data-testid="status-dot"
        className={status.classnames.dot({ size })}
      />
    )}
    {children}
  </div>
);

Status.displayName = "Status";

export { Status };
