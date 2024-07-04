import { RecipeVariants } from "@vanilla-extract/recipes";
import { AddDollar } from "../../../index.types";
import { progressStyles, progressColorProperties } from "./rarui-progress.css";

export type ProgressVariants = RecipeVariants<typeof progressStyles.circle>;

export interface ProgressSprinkle {
  /**
   * Specifies the color of the progress.
   * This prop accepts one of the following values: "$info", "$success" or "$brand"
   * @default $info
   * @examples ["$brand", { xs: "$brand", md: "$info" }]
   */
  color?: AddDollar<keyof typeof progressColorProperties>;
}
