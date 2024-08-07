import { RecipeVariants } from "@vanilla-extract/recipes";
import { checkboxStyles } from "./rarui-checkbox.css";

export type CheckboxVariants = NonNullable<
  RecipeVariants<typeof checkboxStyles.checkbox>
>;
