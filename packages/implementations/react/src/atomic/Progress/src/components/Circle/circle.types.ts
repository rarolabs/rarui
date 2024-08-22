import { HTMLAttributes } from "react";
import {
  ProgressCircleProps as ProgressCircleTyping,
  ProgressProps as ProgressTyping,
} from "@rarui/typings";

type ProgressCircleProperties = ProgressCircleTyping & ProgressTyping;
export type ProgressCircleProps = ProgressCircleProperties &
  HTMLAttributes<HTMLDivElement>;
