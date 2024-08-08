import { HTMLAttributes, ReactNode } from "react";
import { TooltipBodyProperties } from "@rarui/typings";

interface TooltipBody {
  /**
   * The content of the modal header.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type TooltipBodyProps = TooltipBodyProperties &
  TooltipBody &
  HTMLAttributes<HTMLElement>;
