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
}

export type StepperStepProperties = StepperStepTyping & StepperStepVariants;
