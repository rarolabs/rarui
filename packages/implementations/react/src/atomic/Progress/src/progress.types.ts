import { HTMLAttributes } from "react";
import { ProgressProperties } from "@rarui/typings";
import { ProgressCircle } from "./components";

export interface ProgressComponents {
  Circle: typeof ProgressCircle;
}

export interface ProgressTyping extends ProgressProperties {
  /**
   * The progress percentage, represented as a number between 0 and 100.
   * This indicates the completion level of the process.
   */
  percentage: number;
}

export type ProgressProps = ProgressTyping & HTMLAttributes<HTMLDivElement>;
