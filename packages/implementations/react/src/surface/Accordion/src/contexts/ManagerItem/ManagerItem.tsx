import { createContext } from "react";
import { AccordionManagerItemProps } from "./managerItem.types";

export const AccordionManagerItem = createContext<AccordionManagerItemProps>(
  {} as AccordionManagerItemProps,
);
