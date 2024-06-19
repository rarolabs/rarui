import { HTMLAttributes, ReactNode } from "react";
import { TabsVariants } from "@rarui/styles";
import { TabsItem } from "./components";

export interface TabsComponents {
  Item: typeof TabsItem;
}

export interface TabsTyping {
  /**
   * The content of the tabs component.
   * This prop accepts one or more Tabs.Item components or other React nodes.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
  /**
   * Sets the indicated tab as active by default.
   * If unset, defaults to the first tab. This prop should be a number representing the index of the tab.
   */
  preSelectedTab?: number;
}

export type TabsProperties = TabsTyping &
  Pick<TabsVariants, "underlined" | "full">;

export type TabsProps = TabsProperties &
  Omit<HTMLAttributes<HTMLElement>, "color">;
