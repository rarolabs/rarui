import React from "react";
import { tooltip } from "@rarui/styles";

import { BodyProps } from "./body.types";

const Body: React.FC<BodyProps> = ({ children, padding = "none", ...rest }) => (
  <div {...rest} className={tooltip.classnames.header({ padding })}>
    {children}
  </div>
);

Body.displayName = "Tooltip.Body";
export { Body };
