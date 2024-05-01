import { RecipeVariants } from "@vanilla-extract/recipes";
import { styles } from "./raui-input.css";

export type InputVariants = RecipeVariants<typeof styles.container> &
  RecipeVariants<typeof styles.input>;
