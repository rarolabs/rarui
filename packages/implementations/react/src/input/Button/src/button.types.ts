import { ReactNode, ButtonHTMLAttributes } from "react";
import { ButtonProps as ButtonTyping } from "@rarui/typings";

export interface ButtonProperties extends ButtonTyping {
  /**
   * The content of the button.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type _ButtonProps = ButtonProperties &
  ButtonHTMLAttributes<HTMLButtonElement>;
