import { HTMLAttributes } from "react";
import { ProgressVariants } from "@rarui/styles";
import { ProgressProperties } from "../../progress.types";

export type CircleProperties = ProgressProperties & ProgressVariants;
export type CircleProps = CircleProperties & HTMLAttributes<HTMLDivElement>;
