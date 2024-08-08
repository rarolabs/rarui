import { HTMLAttributes } from "react";
import { ProgressProperties } from "@rarui/typings";
import { ProgressCircle } from "./components";

export interface ProgressComponents {
  Circle: typeof ProgressCircle;
}

export type ProgressProps = ProgressProperties & HTMLAttributes<HTMLDivElement>;
