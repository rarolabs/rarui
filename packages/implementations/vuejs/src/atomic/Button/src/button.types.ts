import { ButtonHTMLAttributes } from "vue";

export interface ButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
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
    | "neutral"
    | "inverted";
  /**
   * Change the size of the button.
   * @default large
   */
  size?: "large" | "medium" | "small";
  /**
   * Change the variant of the button.
   * @default solid
   */
  variant?: "solid" | "outlined" | "text" | "tonal";
  /**
   * Disables the button, disallowing user interaction.
   * @default false
   */
  disabled?: boolean;
}
