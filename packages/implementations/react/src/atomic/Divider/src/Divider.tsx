import React from "react";
import { divider } from "@rarui/styles";
import { DividerProperties } from "./divider.types";

const Divider: React.FC<DividerProperties> = ({
  direction = "horizontal",
  type = "solid",
  thickness = "$1",
  size = "100%",
  ...rest
}) => {
  const { className, style, otherProps } = divider.sprinkle({
    borderStyle: type,
    borderTopWidth: direction === "horizontal" ? thickness : "$0",
    borderLeftWidth: direction === "vertical" ? thickness : "$0",
    width: direction === "horizontal" ? size : 0,
    height: direction === "vertical" ? size : 0,
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
