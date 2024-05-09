import { ReactNode, ButtonHTMLAttributes } from "react";
import { IconButtonVariants } from "@rarui/styles";

export interface IconButtonTyping {
  /**
   * The content of the button.
   * @TJS-type React.ReactNode
   */
  source: ReactNode;
  /**
   * Disables the button, disallowing user interaction.
   * @default false
   */
  disabled?: boolean;
}

export type IconButtonProperties = IconButtonTyping & IconButtonVariants;
export type IconButtonProps = IconButtonProperties &
  ButtonHTMLAttributes<HTMLButtonElement>;
