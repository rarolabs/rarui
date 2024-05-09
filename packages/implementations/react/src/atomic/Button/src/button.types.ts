import { ReactNode, ButtonHTMLAttributes } from "react";
import { ButtonVariants } from "@rarui/styles";

export interface ButtonTyping {
  /**
   * The content of the button.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
  /**
   * Disables the button, disallowing user interaction.
   * @default false
   */
  disabled?: boolean;
}

export type ButtonProperties = ButtonTyping & ButtonVariants;
export type _ButtonProps = ButtonProperties &
  ButtonHTMLAttributes<HTMLButtonElement>;
