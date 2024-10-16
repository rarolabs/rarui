import { RecipeVariants } from "@vanilla-extract/recipes";
import { styles } from "./rarui-link.css";

export type LinkVariants = NonNullable<RecipeVariants<typeof styles.link>>;
