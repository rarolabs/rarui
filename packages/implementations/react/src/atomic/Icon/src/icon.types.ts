import { ReactNode, HTMLAttributes } from "react";
import { IconProps as IconTyping } from "@rarui/typings";

export interface IconProperties extends IconTyping {
  /**
   * The SVG contents to display in the Icon.
   * @TJS-type React.ReactNode
   */
  source: ReactNode;
}

export type IconProps = IconProperties &
  Omit<HTMLAttributes<HTMLDivElement>, "color">;
