import { useContext } from "react";

import { AccordionManager, AccordionManagerProps } from "../../contexts";

export const useAccordion: () => AccordionManagerProps = () => {
  const context = useContext(AccordionManager);

  if (context == null || Object.keys(context).length === 0) {
    throw new Error(
      "AccordionHeader or AccordionBody components must be wrapped in <Accordion />",
    );
  }
  return context;
};
