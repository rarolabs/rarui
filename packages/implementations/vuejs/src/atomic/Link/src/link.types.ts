import { LinkHTMLAttributes } from "vue";

export interface LinkProps extends /* @vue-ignore */ LinkHTMLAttributes {
  /**
   * Change the visual style of the link.
   * @default default
   */
  appearance?: "default" | "neutral" | "inverted";
  /**
   * Change the size of the link.
   * @default large
   */
  size?: "large" | "medium" | "small";
}
