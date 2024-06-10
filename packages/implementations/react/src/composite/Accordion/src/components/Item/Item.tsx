import React, { useMemo } from "react";

import { AccordionManagerItem } from "../../contexts";
import { AccordionItemProps } from "./item.types";

const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  index,
  testId,
}) => {
  const context = useMemo(() => ({ index, testId }), [index, testId]);
  return (
    <AccordionManagerItem.Provider value={context}>
      {children}
    </AccordionManagerItem.Provider>
  );
};

export { AccordionItem };
