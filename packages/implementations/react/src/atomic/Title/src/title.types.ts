import { ReactNode, HTMLAttributes } from "react";
import { TitleSprinkle } from "@rarui/styles";

export interface TitleProperties extends TitleSprinkle {
  /**
   * The content of the title.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
  /**
   * Type of html tag to create for the title.
   * @default h1
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export type TitleProps = TitleProperties &
  Omit<HTMLAttributes<HTMLHeadingElement>, "color">;
