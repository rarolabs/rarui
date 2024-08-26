import { HTMLAttributes, ReactNode } from "react";
import { TooltipFooterProps as TooltipFooterTypings } from "@rarui/typings";

interface TooltipFooterProperties extends TooltipFooterTypings {
  /**
   * The content of the modal header.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type TooltipFooterProps = TooltipFooterProperties &
  HTMLAttributes<HTMLElement>;
