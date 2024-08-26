import { RecipeVariants } from "@vanilla-extract/recipes";
import { styles } from "./rarui-radioButton.css";

export type RadioButtonVariants = NonNullable<
  RecipeVariants<typeof styles.radioButton>
>;
