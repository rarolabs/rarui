import { HTMLAttributes, ReactNode } from "react";
import { StepperStepProps as StepperStepTyping } from "@rarui/typings";

export interface StepperStepProperties extends StepperStepTyping {
  /**
   * The content of the step, which can include text, icon, or other React elements.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type StepperStepProps = StepperStepProperties &
  HTMLAttributes<HTMLLIElement>;
