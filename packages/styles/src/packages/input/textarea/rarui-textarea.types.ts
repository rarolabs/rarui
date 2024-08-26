import { RecipeVariants } from "@vanilla-extract/recipes";
import { textareaStyles } from "./rarui-textarea.css";

export type TextareaVariants = NonNullable<
  RecipeVariants<typeof textareaStyles.textarea>
>;
