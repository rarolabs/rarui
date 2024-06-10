import React, { useCallback } from "react";
import { Text } from "@rarui-react/text";
import { Box } from "@rarui-react/box";
import { Icon } from "@rarui-react/icon";
import { ChevronDownIcon, ChevronUpIcon } from "@rarui/icons";

import { AccordionHeaderProps } from "./header.types";
import { useAccordion, useAccordionItem } from "../../hooks";
import { accordion } from "@rarui/styles";

const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  className: _className,
  style: _style,
  noIconToggle = false,
  size = "medium",
  children,
  title,
  subtitle,
  icon,
  ...rest
}) => {
  const { selected, onSelect } = useAccordion();
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
              <Text data-testid="accordion-header-title" fontSize="$xs">
                {title}
              </Text>
            )}
            {subtitle && (
              <Text data-testid="accordion-header-subtitle" fontSize="$xxs">
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
