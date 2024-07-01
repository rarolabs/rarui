import { RecipeVariants } from "@vanilla-extract/recipes";

import { sideNavigationStyles } from "./rarui-sideNavigation.css";

export type SideNavigationVariants = RecipeVariants<
  typeof sideNavigationStyles.sideNavigation
> &
  RecipeVariants<typeof sideNavigationStyles.sideNavigationItem>;
