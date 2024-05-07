import React from "react";
import { CloseIcon } from "@rarui/icons";
import { Title } from "@rarui-react/title";
import { Text } from "@rarui-react/text";
import { IconButton } from "@rarui-react/icon-button";
import { tooltip } from "@rarui/styles";

import { Box } from "@rarui-react/box/src";
import { HeaderProps } from "./header.types";

const Header: React.FC<HeaderProps> = ({
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

Header.displayName = "Tooltip.Header";
export { Header };
