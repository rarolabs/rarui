import { ReactNode, HTMLAttributes } from "react";

export interface LinkProperties {
  /**
   * The content of the link.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
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

export type _LinkProps = LinkProperties & HTMLAttributes<HTMLElement>;
