import React from "react";
import { badge } from "@rarui/styles";
import { BadgeProps } from "./badge.types";

const Badge: React.FC<BadgeProps> = ({
  className: _className,
  style: _style,
  appearance = "brand",
  size = "medium",
  variant = "solid",
  children,
  ...props
}) => (
  <div
    {...props}
    className={badge.classnames.badge({ appearance, variant, size })}
  >
    {size !== "dot" && children}
  </div>
);

Badge.displayName = "Badge";

export { Badge };
