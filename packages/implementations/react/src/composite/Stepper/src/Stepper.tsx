import React, { useMemo, useState } from "react";
import { stepper } from "@rarui/styles";
import { StepperComponents, StepperProps } from "./stepper.types";
import { Context } from "./context";
import { Step } from "./components";

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
    <Context.Provider value={contextValue}>
      <ol className={stepper.classNames.stepper({ direction })} {...props}>
        {children}
      </ol>
    </Context.Provider>
  );
};

Stepper.displayName = "Stepper";
Stepper.Step = Step;
Stepper.Step.displayName = "Stepper.Step";

export { Stepper };
