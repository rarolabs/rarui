import { HTMLAttributes } from "react";
import { ProgressCircleProperties, ProgressProperties } from "@rarui/typings";

export type ProgressCircleProps = ProgressProperties &
  ProgressCircleProperties &
  HTMLAttributes<HTMLDivElement>;
