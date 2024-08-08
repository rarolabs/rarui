import { HTMLAttributes, ReactElement } from "react";
import { StepperProperties } from "@rarui/typings";
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

export type StepperProps = StepperTyping &
  StepperProperties &
  Omit<HTMLAttributes<HTMLOListElement>, "children">;
