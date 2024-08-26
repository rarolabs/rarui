import { RecipeVariants } from "@vanilla-extract/recipes";
import { buttonStyles } from "./rarui-button.css";

export type ButtonVariants = NonNullable<
  RecipeVariants<typeof buttonStyles.button>
>;
