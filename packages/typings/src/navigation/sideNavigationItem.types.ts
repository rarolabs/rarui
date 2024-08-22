import { SideNavigationVariants } from "@rarui/styles";

interface SideNavigationItemTypings {
  /**
   * Determines if the item is active or not.
   */
  active?: boolean;
}

export type SideNavigationItemProps = SideNavigationItemTypings &
  Pick<SideNavigationVariants, "level">;
