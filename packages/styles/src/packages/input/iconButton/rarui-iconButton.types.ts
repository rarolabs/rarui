import { RecipeVariants } from "@vanilla-extract/recipes";
import { iconButtonStyles } from "./rarui-iconButton.css";

export type IconButtonVariants = RecipeVariants<
  typeof iconButtonStyles.iconButton
>;
