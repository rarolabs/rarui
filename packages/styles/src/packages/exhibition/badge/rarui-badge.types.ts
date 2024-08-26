import { RecipeVariants } from "@vanilla-extract/recipes";
import { badgeStyles } from "./rarui-badge.css";

export type BadgeVariants = NonNullable<
  RecipeVariants<typeof badgeStyles.badge>
>;
