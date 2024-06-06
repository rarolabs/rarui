import React, { useCallback } from "react";
import { Title } from "@rarui-react/title";
import { Text } from "@rarui-react/text";
import { Icon as NimbusIcon } from "@rarui-react/icon";
import { ChevronDownIcon, ChevronUpIcon } from "@rarui/icons";
// import { accordion } from "@nimbus-ds/styles";

import { HeaderProps } from "./header.types";
import { useAccordion, useAccordionItem } from "../../hooks";

const Header: React.FC<HeaderProps> = ({
  className: _className,
  style: _style,
  children,
  title,
  subtitle,
  icon,
  noIconToggle = false,
  borderTop = "base",
  borderBottom,
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
      {...rest}
      onClick={handleSelect}
      // className={[
      //   accordion.classnames.header,
      //   accordion.sprinkle({
      //     borderTop,
      //     borderBottom: !isOpen ? borderBottom : "none",
      //   }),
      //   isOpen && accordion.classnames.header_active,
      // ].join(" ")}
    >
      <div
      // className={accordion.classnames.header__content}
      >
        {typeof children === "function"
          ? children({
              selected,
              index,
            })
          : children}

        <div
        // className={accordion.classnames.header__description}
        >
          {icon && (
            <NimbusIcon
              source={icon}
              // color="primary-textHigh"
            />
          )}
          <div
          // className={accordion.classnames.header__title}
          >
            {title && (
              <Title data-testid="accordion-header-title" as="h5">
                {title}
              </Title>
            )}
            {subtitle && (
              <Text
                // fontSize="caption"
                data-testid="accordion-header-subtitle"
              >
                {subtitle}
              </Text>
            )}
          </div>
        </div>

        {!noIconToggle && (
          <NimbusIcon
            data-testid="accordion-icon-Toggle"
            // color="primary-textHigh"
            source={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          />
        )}
      </div>
    </button>
  );
};

export { Header };
