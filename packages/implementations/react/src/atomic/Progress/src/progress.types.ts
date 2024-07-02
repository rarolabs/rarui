import { HTMLAttributes } from "react";
import { ProgressSprinkle } from "@rarui/styles";
import { ProgressCircle } from "./components";

export interface ProgressComponents {
  Circle: typeof ProgressCircle;
}

export interface ProgressTyping {
  /**
   * The progress percentage, represented as a number between 0 and 100.
   * This indicates the completion level of the process.
   */
  percentage: number;
}

export type ProgressProperties = ProgressTyping & ProgressSprinkle;
export type ProgressProps = ProgressProperties & HTMLAttributes<HTMLDivElement>;
