import { useContext } from "react";

import {
  AccordionManagerItem,
  AccordionManagerItemProps,
} from "../../contexts";

export const useAccordionItem: () => AccordionManagerItemProps = () => {
  const context = useContext(AccordionManagerItem);

  if (context == null || Object.keys(context).length === 0) {
    throw new Error(
      "AccordionHeader or AccordionBody components must be wrapped in <AccordionItem />",
    );
  }
  return context;
};
