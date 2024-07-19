import { RecipeVariants } from "@vanilla-extract/recipes";
import { paginationStyles } from "./rarui-pagination.css";

export type PaginationVariants = Omit<
  NonNullable<RecipeVariants<typeof paginationStyles.item>>,
  "selected"
>;
