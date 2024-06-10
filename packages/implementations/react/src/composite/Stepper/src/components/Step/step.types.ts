import { HTMLAttributes, ReactNode } from "react";
import { StepperStepVariants } from "@rarui/styles";

export interface StepperStepTyping {
  /**
   * The title of the step. This provides a brief summary of the step's purpose.
   */

  title?: string;
  /**
   * A more detailed description of the step. This can provide additional context or instructions.
   */
  description?: string;
  /**
   * The content of the step, which can include text, icon, or other React elements.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type StepperStepProperties = StepperStepTyping & StepperStepVariants;
export type StepperStepProps = StepperStepProperties &
  HTMLAttributes<HTMLLIElement>;
