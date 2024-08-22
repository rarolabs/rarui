import { TabsVariants } from "@rarui/styles";

export interface TabsTyping {
  /**
   * Sets the indicated tab as active by default.
   * If unset, defaults to the first tab. This prop should be a number representing the index of the tab.
   */
  preSelectedTab?: number;
  /**
   * Sets the indicated tab as current active tab.
   * Can be used to change the active tab from outside of the component
   */
  selectedTab?: number;
}

export type TabsProps = TabsTyping &
  Pick<TabsVariants, "underlined" | "full" | "position">;
