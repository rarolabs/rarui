import { RecipeVariants } from "@vanilla-extract/recipes";
import { AddDollar } from "../../../index.types";
import {
  progressStyles,
  progressBackgroundColorProperties,
} from "./rarui-progress.css";

export type ProgressVariants = RecipeVariants<typeof progressStyles.circle>;

export interface ProgressSprinkle {
  /**
   * Specifies the background color of the progress.
   * This prop accepts one of the following values: "$info", "$success" or "$brand"
   * @default $info
   * @examples ["$brand", { xs: "$brand", md: "$info" }]
   */
  backgroundColor?: AddDollar<keyof typeof progressBackgroundColorProperties>;
}
