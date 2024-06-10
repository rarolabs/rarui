import { useContext } from "react";

import { StepperContext, StepperContextProps } from "../../context";

export const useStepper: () => StepperContextProps = () =>
  useContext(StepperContext);
