import React from "react";
import { CloseIcon } from "@rarui/icons";
import { tooltip } from "@rarui/styles";
import { Title } from "@rarui-react/title";
import { Text } from "@rarui-react/text";
import { IconButton } from "@rarui-react/icon-button";
import { Box } from "@rarui-react/box";

import { TooltipHeaderProps } from "./header.types";

const TooltipHeader: React.FC<TooltipHeaderProps> = ({
  children,
  title,
  subtitle,
  onClose,
  inverted = false,
  closeable = false,
  padding = "none",
  ...rest
}) => (
  <div {...rest} className={tooltip.classnames.header({ padding })}>
    <Box display="flex" flexDirection="column">
      {title && (
        <Title
          as="h4"
          color={inverted ? "$invert" : "$primary"}
          fontWeight="$medium"
          fontSize="$s"
          lineHeight="$m"
        >
          {title}
        </Title>
      )}
      {subtitle && (
        <Text
          color={inverted ? "$invert" : "$secondary"}
          fontSize="$xs"
          lineHeight="$s"
        >
          {subtitle}
        </Text>
      )}
    </Box>
    {children}
    {closeable && (
      <IconButton
        data-testid="close-button"
        variant="ghost"
        source={<CloseIcon size="medium" />}
        appearance={inverted ? "inverted" : "neutral"}
        onClick={onClose}
        rounded
      />
    )}
  </div>
);

TooltipHeader.displayName = "Tooltip.Header";
export { TooltipHeader };
