import { ButtonHTMLAttributes, ReactNode } from "react";
import { InputLeadingProps as InputLeadingTyping } from "@rarui/typings";

export interface InputLeadingProperties extends InputLeadingTyping {
  /**
   * The content of the Leading.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type InputLeadingProps = InputLeadingProperties &
  ButtonHTMLAttributes<HTMLButtonElement>;
