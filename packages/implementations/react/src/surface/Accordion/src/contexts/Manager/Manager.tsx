import { createContext } from "react";
import { AccordionManagerProps } from "./manager.types";

export const AccordionManager = createContext<AccordionManagerProps>(
  {} as AccordionManagerProps,
);
