import { HTMLAttributes } from "react";
import { ProgressCircleVariants } from "@rarui/styles";
import { ProgressProperties } from "../../progress.types";

export interface Circle {}

export type CircleProperties = Circle &
  ProgressProperties &
  ProgressCircleVariants;

export type CircleProps = CircleProperties & HTMLAttributes<HTMLDivElement>;
