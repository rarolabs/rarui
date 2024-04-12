import { ReactNode, HTMLAttributes } from "react";
import { IconSprinkle } from "@rarui/styles";

export interface IconProperties extends IconSprinkle {
  /**
   * The SVG contents to display in the Icon.
   * @TJS-type React.ReactNode
   */
  source: ReactNode;
}

export type IconProps = IconProperties &
  Omit<HTMLAttributes<HTMLDivElement>, "color">;
