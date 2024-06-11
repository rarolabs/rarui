import React from "react";

import { ModalBodyProps } from "./body.types";
import { Box } from "@rarui-react/box";

const ModalBody: React.FC<ModalBodyProps> = ({
  className: _className,
  style: _style,
  children,
  ...props
}) => <Box {...props}>{children}</Box>;

export { ModalBody };
