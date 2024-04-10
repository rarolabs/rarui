import React from "react";
import { BadgeProps } from "./badge.types";
import { badge } from "@rarui/styles";

const Badge: React.FC<BadgeProps> = ({
  className: _className,
  style: _style,
  appearance = "brand",
  size = "medium",
  variant = "solid",
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={badge.classnames.badge({ appearance, variant, size })}
    >
      {size !== "dot" && children}
    </div>
  );
};
Badge.displayName = "Badge";

export { Badge };
