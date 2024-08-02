import { ButtonHTMLAttributes, ReactNode } from "react";
import { ChipProperties } from "@rarui/typings";

export interface ChipTyping extends ChipProperties {
  /**
   * The content of the button.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type ChipProps = ChipTyping & ButtonHTMLAttributes<HTMLButtonElement>;
