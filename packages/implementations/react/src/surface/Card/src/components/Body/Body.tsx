import React from "react";
import { Box } from "@rarui-react/box";
import { CardBodyProps } from "./body.types";

const CardBody: React.FC<CardBodyProps> = ({ children, ...props }) => (
  <Box display="flex" flexDirection="column" gap="$3xs" {...props}>
    {children}
  </Box>
);

export { CardBody };
