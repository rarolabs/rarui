import { RadioButtonVariants } from "@rarui/styles";

interface RadioButtonTyping {
  /**
   * Sets radio state to activated or deactivated.
   */
  selected?: boolean;
  /**
   * Text to be rendered inside the component.
   */
  label?: string;
}

export type RadioButtonProperties = RadioButtonTyping & RadioButtonVariants;
