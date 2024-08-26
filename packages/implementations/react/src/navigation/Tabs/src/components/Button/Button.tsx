import React from "react";
import { tabs } from "@rarui/styles";

import { TabsButtonProps } from "./button.types";

const TabsButton: React.FC<TabsButtonProps> = ({
  className: _className,
  style: _style,
  children,
  underlined,
  selected,
  ...props
}) => (
  <button
    type="button"
    className={tabs.classnames.button({ underlined, selected })}
    {...props}
  >
    {children}
  </button>
);

export { TabsButton };
