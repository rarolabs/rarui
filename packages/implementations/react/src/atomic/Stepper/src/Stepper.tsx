import React from "react";
import { stepper } from "@rarui/styles";
import { StepperProps } from "./stepper.types";
import { StepperContextProvider, useStepper } from "./contexts/StepperContext";

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

const Stepper: React.FC<StepperProps> = (props) => (
  <StepperContextProvider>
    <Inner {...props} />
  </StepperContextProvider>
);

Stepper.displayName = "Stepper";

export { Stepper };
