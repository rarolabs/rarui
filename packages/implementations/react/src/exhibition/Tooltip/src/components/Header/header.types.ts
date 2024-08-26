import { HTMLAttributes, ReactNode } from "react";
import { TooltipHeaderProps as TooltipHeaderTyping } from "@rarui/typings";

interface TooltipHeaderProperties extends TooltipHeaderTyping {
  /**
   * The content of the modal header.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type TooltipHeaderProps = TooltipHeaderProperties &
  HTMLAttributes<HTMLElement>;
