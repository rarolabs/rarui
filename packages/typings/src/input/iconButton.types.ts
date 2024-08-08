import { IconButtonVariants } from "@rarui/styles";

export interface IconButtonTyping {
  /**
   * Disables the button, disallowing user interaction.
   * @default false
   */
  disabled?: boolean;
}

export type IconButtonProperties = IconButtonTyping & IconButtonVariants;
