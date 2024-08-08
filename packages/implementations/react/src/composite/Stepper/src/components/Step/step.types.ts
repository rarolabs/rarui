import { HTMLAttributes, ReactNode } from "react";
import { StepperStepProperties } from "@rarui/typings";

export interface StepperStepTyping extends StepperStepProperties {
  /**
   * The content of the step, which can include text, icon, or other React elements.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type StepperStepProps = StepperStepTyping &
  HTMLAttributes<HTMLLIElement>;
