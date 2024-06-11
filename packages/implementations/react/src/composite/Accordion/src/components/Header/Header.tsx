import React, { useCallback } from "react";
import { accordion } from "@rarui/styles";
import { Text } from "@rarui-react/text";
import { Box } from "@rarui-react/box";
import { Icon } from "@rarui-react/icon";
import { ChevronDownIcon, ChevronUpIcon } from "@rarui/icons";

import { AccordionHeaderProps } from "./header.types";
import { subtitleSizes, titleSizes } from "./header.definitions";
import { useAccordion, useAccordionItem } from "../../hooks";

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  className: _className,
  style: _style,
  noIconToggle = false,
  size = "medium",
  disabled: itemDisabled,
  children,
  title,
  subtitle,
  icon,
  ...rest
}) => {
  const { selected, disabled, onSelect } = useAccordion();
  const { index, testId } = useAccordionItem();

  const isOpen = selected === index;

  const handleSelect = useCallback(
    () => onSelect(isOpen ? "" : index),
    [isOpen, index, onSelect],
  );

  return (
    <button
      type="button"
      data-testid={testId || `accordion-header-${index}`}
      onClick={handleSelect}
      className={accordion.classnames.item({ selected: isOpen, size })}
      disabled={itemDisabled ?? disabled}
      {...rest}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {typeof children === "function"
          ? children({
              selected,
              index,
            })
          : children}

        <Box
          display="flex"
          gap="$3xs"
          alignItems={subtitle ? "flex-start" : "center"}
        >
          {icon && <Icon source={icon} />}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap="$3xs"
          >
            {title && (
              <Text
                data-testid="accordion-header-title"
                fontSize={titleSizes[size]}
              >
                {title}
              </Text>
            )}
            {subtitle && (
              <Text
                data-testid="accordion-header-subtitle"
                fontSize={subtitleSizes[size]}
              >
                {subtitle}
              </Text>
            )}
          </Box>
        </Box>
        {!noIconToggle && (
          <Icon
            data-testid="accordion-icon-Toggle"
            source={
              isOpen ? (
                <ChevronUpIcon size="medium" />
              ) : (
                <ChevronDownIcon size="medium" />
              )
            }
          />
        )}
      </Box>
    </button>
  );
};

export { AccordionHeader };
