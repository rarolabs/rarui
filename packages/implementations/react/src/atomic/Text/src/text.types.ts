import { ReactNode, HTMLAttributes } from "react";
import { TextSprinkle } from "@rarui/styles";

export interface TextProperties extends TextSprinkle {
  /**
   * The content of the link.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
  /**
   * Type of html tag to create for the Text component.
   * @default p
   */
  as?: "p" | "span";
  /**
   * The -webkit-line-clamp CSS property allows limiting of the contents of a block to the specified number of lines.
   */
  lineClamp?: number;
}

export type TextProps = TextProperties &
  Omit<HTMLAttributes<HTMLParagraphElement>, "color">;
