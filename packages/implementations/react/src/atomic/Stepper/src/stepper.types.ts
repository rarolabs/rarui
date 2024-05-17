import { HTMLAttributes, ReactElement } from "react";
import { Step } from "./components/Step";

export interface StepperComponents {
  Step: typeof Step;
}
export interface StepperProperties {
  direction?: "vertical" | "horizontal";
  children: ReactElement<typeof Step> | ReactElement<typeof Step>[];
}
export type StepperProps = StepperProperties &
  Omit<HTMLAttributes<HTMLDivElement>, "children">;
