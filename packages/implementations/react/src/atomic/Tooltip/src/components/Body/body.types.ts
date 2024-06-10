import { HTMLAttributes, ReactNode } from "react";
import { TooltipVariants } from "@rarui/styles";

interface TooltipBody {
  /**
   * The content of the modal header.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type TooltipBodyProperties = TooltipBody &
  Exclude<TooltipVariants, "inverted">;
export type TooltipBodyProps = TooltipBodyProperties &
  HTMLAttributes<HTMLElement>;
