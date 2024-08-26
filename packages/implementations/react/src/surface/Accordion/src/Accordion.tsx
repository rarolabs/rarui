import React, { useEffect, useMemo, useState } from "react";
import { Box } from "@rarui-react/box";
import { AccordionComponents, AccordionProps } from "./accordion.types";
import { AccordionBody, AccordionItem, AccordionHeader } from "./components";
import { AccordionManager } from "./contexts";

const Accordion: React.FC<AccordionProps> & AccordionComponents = ({
  className: _className,
  style: _style,
  children,
  selectedDefault,
  disabled,
  ...rest
}: AccordionProps) => {
  const [selected, onSelect] = useState("");

  useEffect(() => {
    if (selectedDefault) {
      onSelect(selectedDefault);
    }
  }, [selectedDefault]);

  const context = useMemo(
    () => ({
      selected,
      disabled,
      onSelect,
    }),
    [selected, disabled, onSelect],
  );

  return (
    <Box as="div" display="flex" flexDirection="column" gap="$3xs" {...rest}>
      <AccordionManager.Provider value={context}>
        {children}
      </AccordionManager.Provider>
    </Box>
  );
};

Accordion.Body = AccordionBody;
Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.displayName = "Accordion";
Accordion.Body.displayName = "Accordion.Body";
Accordion.Item.displayName = "Accordion.Item";
Accordion.Header.displayName = "Accordion.Header";

export { Accordion };
