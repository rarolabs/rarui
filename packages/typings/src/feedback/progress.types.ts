import { ProgressSprinkle } from "@rarui/styles";

export interface ProgressTyping {
  /**
   * The progress percentage, represented as a number between 0 and 100.
   * This indicates the completion level of the process.
   */
  percentage: number;
}

export type ProgressProps = ProgressTyping & ProgressSprinkle;
