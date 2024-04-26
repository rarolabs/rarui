import { HTMLAttributes, ReactNode } from "react";
// import { DividerSprinkle } from "@rarui/styles";

export interface DividerProperties {
  /**
   * The content of the button.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
  /**
   * Change the direction of the divider.
   * @default large
   */
  direction?: "horizontal" | "vertical";
  /**
   * Change the width of the divider.
   * @default medium
   */
  width?: "medium" | "small";
  /**
   * Change the size of the divider.
   * @default md
   */
  size?: "xs" | "s" | "md" | "lg" | "xl" | "xxl" | "xlg" | "xxlg";
  /**
   * Change the style of the divider.
   */
  style?: "solid" | "dashed";
}

export type DividerProps = DividerProperties & HTMLAttributes<HTMLDivElement>;
