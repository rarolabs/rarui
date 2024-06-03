import { RecipeVariants } from "@vanilla-extract/recipes";
import { styles } from "./rarui-input.css";

export type InputVariants = RecipeVariants<typeof styles.container> &
  RecipeVariants<typeof styles.input>;
