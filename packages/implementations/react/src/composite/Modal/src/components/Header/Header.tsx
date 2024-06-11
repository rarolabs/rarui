import React from "react";
import { CloseIcon } from "@rarui/icons";
import { Box } from "@rarui-react/box";
import { IconButton } from "@rarui-react/icon-button";
import { Title } from "@rarui-react/title";
import { Text } from "@rarui-react/text";

import { ModalHeaderProps } from "./header.types";
import { useModal } from "../../hooks";

const ModalHeader: React.FC<ModalHeaderProps> = ({
  className: _className,
  style: _style,
  children,
  title,
  subtitle,
  ...props
}) => {
  const { open, onDismiss } = useModal();
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      {...props}
    >
      <Box display="flex" flexDirection="column">
        {title && (
          <Title data-testid="header-title" as="h5" color="$primary">
            {title}
          </Title>
        )}
        {subtitle && (
          <Text
            data-testid="header-subtitle"
            color="$secondary"
            lineHeight="$l"
            fontSize="$m"
            fontWeight="$regular"
          >
            {subtitle}
          </Text>
        )}
      </Box>
      <IconButton
        aria-label="Dismiss modal"
        data-testid="dismiss-modal-button"
        tabIndex={0}
        variant="ghost"
        appearance="neutral"
        source={<CloseIcon size="medium" />}
        onClick={() => onDismiss(!open)}
      />
      {children}
    </Box>
  );
};

export { ModalHeader };
