import { HTMLAttributes, ReactNode } from "react";
import { TooltipVariants } from "@rarui/styles";

interface TooltipHeader {
  /**
   * The content of the modal header.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
  /**
   * Displays a delete icon and adds user interaction.
   * @default false
   */
  closeable?: boolean;
  /**
   * Header title
   */
  title?: string;
  /**
   * Header subtitle
   */
  subtitle?: string;
  /**
   *
   */
  onClose?: () => void;
}

export type TooltipHeaderProperties = TooltipHeader & TooltipVariants;
export type TooltipHeaderProps = TooltipHeaderProperties &
  HTMLAttributes<HTMLElement>;
