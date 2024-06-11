import React from "react";
import { Box } from "@rarui-react/box";
import { ModalFooterProps } from "./footer.types";

const ModalFooter: React.FC<ModalFooterProps> = ({ children, ...props }) => (
  <Box
    display="flex"
    justifyContent="flex-end"
    alignItems="center"
    gap="$3xs"
    {...props}
  >
    {children}
  </Box>
);

export { ModalFooter };
