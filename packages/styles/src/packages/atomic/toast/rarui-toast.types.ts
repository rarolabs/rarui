import { RecipeVariants } from "@vanilla-extract/recipes";
import { styles } from "./rarui-toast.css";

export type ToastVariants = NonNullable<RecipeVariants<typeof styles.toast>>;
