import { RecipeVariants } from "@vanilla-extract/recipes";
import { breadcrumbStyles } from "./rarui-breadcrumb.css";

export type BreadcrumbVariants = RecipeVariants<
  typeof breadcrumbStyles.breadcrumbItem
>;
