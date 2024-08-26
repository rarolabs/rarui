import { createContext } from "react";
import { StepperContextProps } from "./manager.types";

export const StepperContext = createContext<StepperContextProps>(
  {} as StepperContextProps,
);
