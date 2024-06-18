import { RecipeVariants } from "@vanilla-extract/recipes";
import { tabsStyles } from "./rarui-tabs.css";

export type TabsVariants = NonNullable<RecipeVariants<typeof tabsStyles.ul>> &
  NonNullable<RecipeVariants<typeof tabsStyles.li>> &
  NonNullable<RecipeVariants<typeof tabsStyles.button>>;
