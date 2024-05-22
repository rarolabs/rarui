import { HTMLAttributes } from "react";
import { ProgressCircleVariants } from "@rarui/styles";
import { ProgressProperties } from "../../progress.types";

export type CircleProperties = ProgressProperties & ProgressCircleVariants;

export type CircleProps = CircleProperties & HTMLAttributes<HTMLDivElement>;
