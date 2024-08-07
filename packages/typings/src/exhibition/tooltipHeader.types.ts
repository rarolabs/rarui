import { TooltipVariants } from "@rarui/styles";

interface TooltipHeader {
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
