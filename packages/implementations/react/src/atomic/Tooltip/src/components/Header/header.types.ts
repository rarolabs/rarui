import { HTMLAttributes, ReactNode } from "react";
import { TooltipHeaderProperties } from "@rarui/typings";

interface TooltipHeaderTyping extends TooltipHeaderProperties {
  /**
   * The content of the modal header.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type TooltipHeaderProps = TooltipHeaderTyping &
  HTMLAttributes<HTMLElement>;
