import { RecipeVariants } from "@vanilla-extract/recipes";
import { breadcrumbStyles } from "./rarui-breadcrumb.css";

export type BreadcrumbVariants = NonNullable<
  RecipeVariants<typeof breadcrumbStyles.item>
>;
