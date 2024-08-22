import { TitleSprinkle } from "@rarui/styles";

export interface TitleProps extends TitleSprinkle {
  /**
   * Type of html tag to create for the title.
   * @default h1
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
