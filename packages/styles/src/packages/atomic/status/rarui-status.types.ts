import { RecipeVariants } from "@vanilla-extract/recipes";
import { statusStyles } from "./rarui-status.css";

export type StatusVariants = NonNullable<
  RecipeVariants<typeof statusStyles.status>
>;
