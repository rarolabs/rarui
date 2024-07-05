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
    <Box display="flex" gap="$4xs" padding="$3xs" flexDirection="column">
      {title && (
        <Title as="h6" color={inverted ? "$invert" : "$primary"}>
          {title}
        </Title>
      )}
      {subtitle && (
        <Text
          color={inverted ? "$invert" : "$secondary"}
          fontSize="$xs"
          lineHeight="$xs"
        >
          {subtitle}
        </Text>
      )}
    </Box>
    {children}
    {closeable && (
      <Box alignSelf="flex-start">
        <IconButton
          size="small"
          data-testid="close-button"
          variant="ghost"
          source={<CloseIcon size="medium" />}
          appearance={inverted ? "inverted" : "neutral"}
          onClick={onClose}
        />
      </Box>
    )}
  </div>
);

TooltipHeader.displayName = "Tooltip.Header";
export { TooltipHeader };
