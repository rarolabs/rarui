import React from "react";
import { chip } from "@rarui/styles";

import { ChipProps } from "./chip.types";

const Chip: React.FC<ChipProps> = ({
  className: _className,
  style: _style,
  pill = false,
  closeable = false,
  selected,
  avatar,
  children,
  ...props
}) => {
  return (
    <div {...props} className={chip.classnames.chip({ pill, selected })}>
      {avatar && <div>{avatar}</div>}
      {children}
      {closeable && <div>x</div>}

      <span className={chip.classnames.overlay} />
    </div>
  );
};
Chip.displayName = "Chip";

export { Chip };
