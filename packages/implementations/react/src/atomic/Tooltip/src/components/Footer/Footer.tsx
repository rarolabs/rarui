import React from "react";
import { tooltip } from "@rarui/styles";

import { FooterProps } from "./footer.types";

const Footer: React.FC<FooterProps> = ({
  children,
  padding = "none",
  ...rest
}) => (
  <div {...rest} className={tooltip.classnames.header({ padding })}>
    {children}
  </div>
);

Footer.displayName = "Tooltip.Footer";
export { Footer };
