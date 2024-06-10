import { HTMLAttributes } from "react";
import { ProgressVariants } from "@rarui/styles";
import { ProgressProperties } from "../../progress.types";

export type ProgressCircleProperties = ProgressProperties & ProgressVariants;
export type ProgressCircleProps = ProgressCircleProperties &
  HTMLAttributes<HTMLDivElement>;
