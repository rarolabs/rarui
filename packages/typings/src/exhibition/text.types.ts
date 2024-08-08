import { TextSprinkle } from "@rarui/styles";

export interface TextProperties extends TextSprinkle {
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
