import { HTMLAttributes, ReactElement } from "react";
import { StepperVariants } from "@rarui/styles";
import { StepperStep } from "./components/Step";

export interface StepperComponents {
  Step: typeof StepperStep;
}

export interface StepperTyping {
  /**
   * The content of the stepper, which should be one or more Step components.
   * @TJS-type <Stepper.Step />
   */
  children: ReactElement | ReactElement[];
}

export type StepperProperties = StepperTyping & StepperVariants;

export type StepperProps = StepperProperties &
  Omit<HTMLAttributes<HTMLOListElement>, "children">;
