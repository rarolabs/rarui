import { ButtonVariants } from "@rarui/styles";

export interface ButtonTyping {
  /**
   * Disables the button, disallowing user interaction.
   * @default false
   */
  disabled?: boolean;
}

export type ButtonProperties = ButtonTyping & ButtonVariants;
