import { RecipeVariants } from "@vanilla-extract/recipes";
import { styles, sprinkle } from "./rarui-chip.css";

export type ChipVariants = RecipeVariants<typeof styles.chip>;
export type ChipSprinkle = Parameters<typeof sprinkle>[0];
