import { HTMLAttributes, ReactNode } from "react";

export interface StepProperties {
  title?: string;
  description?: string;
  done?: boolean;
  active?: boolean;
  children: ReactNode;
}
export type StepProps = StepProperties & HTMLAttributes<HTMLDivElement>;
