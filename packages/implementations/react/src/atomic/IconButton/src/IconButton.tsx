import React from "react";
import { iconButton } from "@rarui/styles";

import { IconButtonProps } from "./iconButton.types";

const IconButton: React.FC<IconButtonProps> = ({
  className: _className,
  style: _style,
  appearance = "brand",
  variant = "solid",
  rounded,
  source,
  ...props
}) => (
  <button
    {...props}
    type="button"
    className={iconButton.classnames.iconButton({
      variant,
      appearance,
      rounded,
    })}
  >
    {source}
    <span className={iconButton.classnames.overlay} />
  </button>
);

IconButton.displayName = "IconButton";

export { IconButton };