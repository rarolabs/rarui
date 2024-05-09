import { ButtonHTMLAttributes, ReactNode } from "react";
import { ChipVariants, ChipSprinkle } from "@rarui/styles";

export interface ChipTyping extends ChipSprinkle {
  /**
   * The content of the button.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
  /**
   * Displays a delete icon and adds user interaction.
   * @default false
   */
  closeable?: boolean;
}

export type ChipProperties = ChipTyping & ChipVariants;
export type ChipProps = ChipProperties &
  ButtonHTMLAttributes<HTMLButtonElement>;
