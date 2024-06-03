import { HTMLAttributes } from "react";
import { Circle } from "./components";

export interface ProgressComponents {
  Circle: typeof Circle;
}

export interface ProgressTyping {
  /**
   * The progress percentage, represented as a number between 0 and 100.
   * This indicates the completion level of the process.
   */
  percentage: number;
}

export type ProgressProperties = ProgressTyping;
export type ProgressProps = ProgressProperties & HTMLAttributes<HTMLDivElement>;
