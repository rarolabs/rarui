import React from "react";
import { tooltip } from "@rarui/styles";

import { TooltipFooterProps } from "./footer.types";

const TooltipFooter: React.FC<TooltipFooterProps> = ({
  children,
  padding = "none",
  ...rest
}) => (
  <div {...rest} className={tooltip.classnames.header({ padding })}>
    {children}
  </div>
);

TooltipFooter.displayName = "Tooltip.Footer";
export { TooltipFooter };
