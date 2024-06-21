import React from "react";
import { Box } from "@rarui-react/box";
import { Title } from "@rarui-react/title";
import { Text } from "@rarui-react/text";
import { CardHeaderProps } from "./header.types";

const CardHeader: React.FC<CardHeaderProps> = ({
  className: _className,
  style: _style,
  children,
  title,
  description,
  ...props
}) => (
  <Box display="flex" flexDirection="column" gap="$3xs" {...props}>
    {title && <Title as="h4">{title}</Title>}
    {description && (
      <Text fontSize="$m" lineHeight="$m" color="$secondary">
        {description}
      </Text>
    )}
    {children}
  </Box>
);

export { CardHeader };
