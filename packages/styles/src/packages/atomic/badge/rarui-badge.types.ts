import { RecipeVariants } from "@vanilla-extract/recipes";
import { badgeStyles } from "./rarui-badge.css";

export type BadgeVariants = RecipeVariants<typeof badgeStyles.badge>;
