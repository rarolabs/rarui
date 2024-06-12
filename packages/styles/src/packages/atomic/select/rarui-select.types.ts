import { RecipeVariants } from "@vanilla-extract/recipes";
import { selectStyles } from "./rarui-select.css";

export type SelectVariants = NonNullable<
  RecipeVariants<typeof selectStyles.select>
>;
