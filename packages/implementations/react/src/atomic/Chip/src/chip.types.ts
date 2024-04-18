import { ButtonHTMLAttributes, ReactNode } from "react";
import { ChipVariants, ChipSprinkle } from "@rarui/styles";

export interface Chip {
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

export type ChipProperties = Chip & ChipVariants & ChipSprinkle;
export type ChipProps = ChipProperties &
  ButtonHTMLAttributes<HTMLButtonElement>;
