import { ReactNode, HTMLAttributes } from "react";

export interface BadgeProperties {
  /**
   * The content of the button.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
  /**
   * Change the visual style of the badge.
   * @default brand
   */
  appearance?:
    | "brand"
    | "danger"
    | "success"
    | "warning"
    | "info"
    | "neutral"
    | "inverted";
  /**
   * Change the size of the badge.
   * @default medium
   */
  size?: "large" | "medium" | "small" | "dot";
  /**
   * Change the variant of the badge.
   * @default solid
   */
  variant?: "solid" | "outlined";
}

export type BadgeProps = BadgeProperties & HTMLAttributes<HTMLDivElement>;
