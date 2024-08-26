import { RecipeVariants } from "@vanilla-extract/recipes";
import { StandardLonghandProperties } from "../../../index.types";
import { styles } from "./rarui-toast.css";

export type ToastVariants = NonNullable<RecipeVariants<typeof styles.toast>>;
export type ToastSprinkle = Pick<StandardLonghandProperties, "width">;
