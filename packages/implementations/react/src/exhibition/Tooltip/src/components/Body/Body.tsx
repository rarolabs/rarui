import React from "react";
import { tooltip } from "@rarui/styles";

import { TooltipBodyProps } from "./body.types";

const TooltipBody: React.FC<TooltipBodyProps> = ({
  children,
  padding = "none",
  ...rest
}) => (
  <div {...rest} className={tooltip.classnames.header({ padding })}>
    {children}
  </div>
);

TooltipBody.displayName = "Tooltip.Body";
export { TooltipBody };
