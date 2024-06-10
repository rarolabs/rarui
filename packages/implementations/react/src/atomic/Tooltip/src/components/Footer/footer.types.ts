import { HTMLAttributes, ReactNode } from "react";
import { TooltipVariants } from "@rarui/styles";

interface TooltipFooter {
  /**
   * The content of the modal header.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type TooltipFooterProperties = TooltipFooter &
  Exclude<TooltipVariants, "inverted">;

export type TooltipFooterProps = TooltipFooterProperties &
  HTMLAttributes<HTMLElement>;
