import { HTMLAttributes, ReactNode } from "react";
import { TooltipBodyProps as TooltipBodyTyping } from "@rarui/typings";

interface TooltipBodyProperties extends TooltipBodyTyping {
  /**
   * The content of the modal header.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type TooltipBodyProps = TooltipBodyProperties &
  HTMLAttributes<HTMLElement>;
