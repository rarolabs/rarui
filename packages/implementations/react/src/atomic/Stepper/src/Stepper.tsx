import React from "react";
import { stepper } from "@rarui/styles";
import { StepperComponents, StepperProps } from "./stepper.types";
import { StepperContextProvider, useStepper } from "./contexts/StepperContext";
import { Step } from "./components/Step";

const Inner: React.FC<StepperProps> = ({
  className: _className,
  style: _style,
  children,
  direction = "horizontal",
  ...props
}) => {
  useStepper(direction);
  return (
    <div className={stepper.classNames.stepper({ direction })} {...props}>
      {children}
    </div>
  );
};

const Stepper: React.FC<StepperProps> & StepperComponents = (
  props: StepperProps
) => (
  <StepperContextProvider>
    <Inner {...props} />
  </StepperContextProvider>
);

Stepper.displayName = "Stepper";
Stepper.Step = Step;
Stepper.Step.displayName = "Stepper.Step";

export { Stepper };
