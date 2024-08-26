import React, { useMemo, useState } from "react";
import { stepper } from "@rarui/styles";
import { StepperComponents, StepperProps } from "./stepper.types";
import { StepperContext } from "./context";
import { StepperStep } from "./components";

const Stepper: React.FC<StepperProps> & StepperComponents = ({
  className: _className,
  style: _style,
  direction: _direction = "horizontal",
  children,
  ...props
}: StepperProps) => {
  const [direction, setDirection] = useState(_direction);
  const contextValue = useMemo(
    () => ({ direction, setDirection }),
    [direction],
  );

  return (
    <StepperContext.Provider value={contextValue}>
      <ol className={stepper.classNames.stepper({ direction })} {...props}>
        {children}
      </ol>
    </StepperContext.Provider>
  );
};

Stepper.displayName = "Stepper";
Stepper.Step = StepperStep;
Stepper.Step.displayName = "Stepper.Step";

export { Stepper };
