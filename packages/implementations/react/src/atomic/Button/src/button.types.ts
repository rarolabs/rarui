import { ReactNode, ButtonHTMLAttributes } from "react";
import { ButtonProperties } from "@rarui/typings";

export interface ButtonTyping extends ButtonProperties {
  /**
   * The content of the button.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type _ButtonProps = ButtonTyping &
  ButtonHTMLAttributes<HTMLButtonElement>;
