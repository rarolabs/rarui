import { ReactNode, ButtonHTMLAttributes } from "react";
import { ButtonProperties } from "packages/typings/src";

export interface ButtonTyping extends ButtonProperties {
  /**
   * The content of the button.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type _ButtonProps = ButtonTyping &
  ButtonHTMLAttributes<HTMLButtonElement>;
