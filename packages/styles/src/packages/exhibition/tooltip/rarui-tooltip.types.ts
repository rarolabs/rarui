import { RecipeVariants } from "@vanilla-extract/recipes";
import { styles } from "./rarui-tooltip.css";

export type TooltipVariants = NonNullable<
  RecipeVariants<typeof styles.tooltip>
>;
