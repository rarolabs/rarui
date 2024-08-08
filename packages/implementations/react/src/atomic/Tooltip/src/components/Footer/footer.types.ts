import { HTMLAttributes, ReactNode } from "react";
import { TooltipFooterProperties } from "@rarui/typings";

interface TooltipFooter {
  /**
   * The content of the modal header.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type TooltipFooterProps = TooltipFooterProperties &
  TooltipFooter &
  HTMLAttributes<HTMLElement>;
