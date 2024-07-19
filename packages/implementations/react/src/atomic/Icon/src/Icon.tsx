import React from "react";
import { icon } from "@rarui/styles";

import { IconProps } from "./icon.types";

const Icon: React.FC<IconProps> = ({
  className: _className,
  style: _style,
  source,
  ...rest
}) => {
  const { className, style, otherProps } = icon.sprinkle(rest);

  return (
    <div
      className={[icon.classnames.icon(), className].join(" ")}
      style={style}
      {...otherProps}
    >
      {source}
    </div>
  );
};
Icon.displayName = "Icon";

export { Icon };
