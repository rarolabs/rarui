import React from "react";
import { skeleton } from "@rarui/styles";

import { SkeletonProps } from "./skeleton.types";

const Skeleton: React.FC<SkeletonProps> = ({
  className: _className,
  style: _style,
  ...rest
}) => {
  const { className, style, otherProps } = skeleton.sprinkle(rest);

  return (
    <div
      className={[className, skeleton.classnames.skeleton()].join(" ")}
      style={style}
      {...otherProps}
    />
  );
};

Skeleton.displayName = "Skeleton";
export { Skeleton };
