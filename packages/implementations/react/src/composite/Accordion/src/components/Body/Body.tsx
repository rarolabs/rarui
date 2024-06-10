import React, { useMemo } from "react";
import { accordion } from "@rarui/styles";

import { AccordionBodyProps } from "./body.types";
import { useAccordion, useAccordionItem } from "../../hooks";

const AccordionBody: React.FC<AccordionBodyProps> = ({
  className: _className,
  style: _style,
  children,
  padding = "base",
  ...props
}) => {
  const { selected } = useAccordion();
  const { index } = useAccordionItem();

  const isOpen = useMemo(() => selected === index, [selected, index]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className={accordion.classnames.body({ padding })} {...props}>
      {children}
    </div>
  );
};

export { AccordionBody };
