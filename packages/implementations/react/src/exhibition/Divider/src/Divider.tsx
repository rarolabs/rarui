import React from "react";
import { divider } from "@rarui/styles";
import { DividerProps } from "./divider.types";

const Divider: React.FC<DividerProps> = ({
  direction = "horizontal",
  type = "solid",
  thickness = "$1",
  color = "$divider",
  size = "100%",
  ...rest
}) => {
  const { className, style, otherProps } = divider.sprinkle({
    borderTopWidth: direction === "horizontal" ? thickness : null,
    borderLeftWidth: direction === "vertical" ? thickness : null,
    width: direction === "horizontal" ? size : 0,
    height: direction === "vertical" ? size : 0,
    borderStyle: type,
    borderColor: color,
    ...rest,
  });

  return (
    <div
      className={[className, divider.classnames.divider()].join(" ")}
      style={style}
      {...otherProps}
    />
  );
};

Divider.displayName = "Divider";

export { Divider };
