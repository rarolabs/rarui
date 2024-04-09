import { ReactNode, ButtonHTMLAttributes } from "react";

export interface ButtonProperties {
  /**
   * The content of the button.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
  /**
   * Change the visual style of the button.
   * @default brand
   */
  appearance?:
    | "brand"
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

export type ButtonBaseProps = ButtonProperties &
  ButtonHTMLAttributes<HTMLButtonElement>;
