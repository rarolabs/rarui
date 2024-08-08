import { ReactNode, HTMLAttributes } from "react";
import { IconProperties } from "@rarui/typings";

export interface IconTyping extends IconProperties {
  /**
   * The SVG contents to display in the Icon.
   * @TJS-type React.ReactNode
   */
  source: ReactNode;
}

export type IconProps = IconTyping &
  Omit<HTMLAttributes<HTMLDivElement>, "color">;
