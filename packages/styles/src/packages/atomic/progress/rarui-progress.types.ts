import { RecipeVariants } from "@vanilla-extract/recipes";
import { progressStyles } from "./rarui-progress.css";

export type ProgressVariants = RecipeVariants<typeof progressStyles.circle>;
