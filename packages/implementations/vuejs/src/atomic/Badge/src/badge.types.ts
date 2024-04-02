import { HTMLAttributes } from "vue";

export interface BadgeProps extends /* @vue-ignore */ HTMLAttributes {
  /**
   * Change the visual style of the button.
   * @default brand
   */
  appearance?:
    | "brand"
    | "brand-secondary"
    | "danger"
    | "success"
    | "warning"
    | "info"
    | "neutral"
    | "inverted";
  /**
   * Change the size of the button.
   * @default medium
   */
  size?: "large" | "medium" | "small" | "dot";
  /**
   * Change the variant of the button.
   * @default solid
   */
  variant?: "solid" | "outlined";
}
