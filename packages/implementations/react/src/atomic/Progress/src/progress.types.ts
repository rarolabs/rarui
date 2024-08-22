import { HTMLAttributes } from "react";
import { ProgressProps as ProgressTypings } from "@rarui/typings";
import { ProgressCircle } from "./components";

export interface ProgressComponents {
  Circle: typeof ProgressCircle;
}

type ProgressProperties = ProgressTypings;
export type ProgressProps = ProgressProperties & HTMLAttributes<HTMLDivElement>;
