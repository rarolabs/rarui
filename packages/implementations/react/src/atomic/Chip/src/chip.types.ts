import { ButtonHTMLAttributes, ReactNode } from "react";
import { ChipProps as ChipTyping } from "@rarui/typings";

export interface ChipProperties extends ChipTyping {
  /**
   * The content of the button.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type ChipProps = ChipProperties &
  ButtonHTMLAttributes<HTMLButtonElement>;
