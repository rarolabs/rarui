import React, { useEffect, useMemo, useState } from "react";
import { AccordionComponents, AccordionProps } from "./accordion.types";
import { Body, Item, Header } from "./components";
import { Manager } from "./contexts";

const Accordion: React.FC<AccordionProps> & AccordionComponents = ({
  className: _className,
  style: _style,
  children,
  selectedDefault,
  className,
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
      onSelect,
    }),
    [selected, onSelect],
  );

  return (
    <div {...rest}>
      <Manager.Provider value={context}>{children}</Manager.Provider>
    </div>
  );
};

Accordion.Body = Body;
Accordion.Item = Item;
Accordion.Header = Header;
Accordion.displayName = "Accordion";
Accordion.Body.displayName = "Accordion.Body";
Accordion.Item.displayName = "Accordion.Item";
Accordion.Header.displayName = "Accordion.Header";

export { Accordion };
