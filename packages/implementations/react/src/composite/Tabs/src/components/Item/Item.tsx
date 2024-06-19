import React from "react";
import { Box } from "@rarui-react/box";
import { TabsItemProps } from "./item.types";

const TabsItem: React.FC<TabsItemProps> = ({ children }) => (
  <Box paddingTop="$2xs" color="$primary">
    {children}
  </Box>
);

export { TabsItem };
