import React from "react";
import { Box } from "@rarui-react/box";
import { ModalBodyProps } from "./body.types";

const ModalBody: React.FC<ModalBodyProps> = ({
  className: _className,
  style: _style,
  children,
  ...props
}) => <Box {...props}>{children}</Box>;

export { ModalBody };
