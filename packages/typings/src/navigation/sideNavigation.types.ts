import { SideNavigationVariants } from "@rarui/styles";

export interface SideNavigationTyping {
  /**
   * Title of the sideNavigation
   */
  name: string;
  /**
   * Description of the sideNavigation.
   */
  description?: string;
}

export type SideNavigationProperties = SideNavigationTyping &
  SideNavigationVariants;
