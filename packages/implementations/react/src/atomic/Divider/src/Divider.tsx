import React from "react";
import { divider } from "@rarui/styles";
import { DividerProperties } from "./divider.types";

const Divider: React.FC<DividerProperties> = ({
  direction = "vertical",
  width = "medium",
  size = "md",
  style = "solid",
  ...props
}) => (
  <div
    {...props}
    className={divider.classnames.divider({ direction, width, size, style })}
  />
);

Divider.displayName = "Divider";

export { Divider };
