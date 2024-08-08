import { ChipVariants, ChipSprinkle } from "@rarui/styles";

export interface ChipTyping extends ChipSprinkle {
  /**
   * Displays a delete icon and adds user interaction.
   * @default false
   */
  closeable?: boolean;
}

export type ChipProperties = ChipTyping & ChipVariants;
