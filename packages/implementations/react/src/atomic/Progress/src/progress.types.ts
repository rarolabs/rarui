import { HTMLAttributes } from "react";
import { Circle } from "./components";

export interface ProgressComponents {
  Circle: typeof Circle;
}

export interface Progress {
  percentage: number;
}
export type ProgressProperties = Progress;

export type ProgressProps = ProgressProperties & HTMLAttributes<HTMLDivElement>;
