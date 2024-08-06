import { RecipeVariants } from "@vanilla-extract/recipes";
import { styles } from "./rarui-button.css";

export type ButtonVariants = NonNullable<RecipeVariants<typeof styles.button>>;
