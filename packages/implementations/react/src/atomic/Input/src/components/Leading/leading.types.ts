import { ButtonHTMLAttributes, ReactNode } from "react";
import { InputLeadingProperties } from "@rarui/typings";

export interface InputLeadingTyping extends InputLeadingProperties {
  /**
   * The content of the Leading.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type InputLeadingProps = InputLeadingTyping &
  ButtonHTMLAttributes<HTMLButtonElement>;
