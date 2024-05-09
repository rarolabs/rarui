import { HTMLAttributes } from "react";

export interface Progress {
  percentage: number;
}

export type ProgressProperties = Progress;

export type ProgressProps = ProgressProperties & HTMLAttributes<HTMLDivElement>;
