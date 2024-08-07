import { HTMLAttributes, ReactNode } from "react";
import { StepperStepProperties } from "@rarui/typings";

export interface StepperStepTyping extends StepperStepProperties {
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

export type StepperStepProps = StepperStepTyping &
  HTMLAttributes<HTMLLIElement>;
