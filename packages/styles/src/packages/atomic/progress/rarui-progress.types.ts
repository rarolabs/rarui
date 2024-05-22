import { RecipeVariants } from "@vanilla-extract/recipes";
import { styles } from "./rarui-progress.css";

export type ProgressVariants = RecipeVariants<typeof styles.progress>;
export type ProgressCircleVariants = RecipeVariants<typeof styles.circle>;
