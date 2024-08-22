import { HTMLAttributes, ReactNode } from "react";
import { TabsProps as TabsTyping } from "@rarui/typings";
import { TabsItem } from "./components";

export interface TabsComponents {
  Item: typeof TabsItem;
}

export interface TabsProperties extends TabsTyping {
  /**
   * The content of the tabs component.
   * This prop accepts one or more Tabs.Item components or other React nodes.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type TabsProps = TabsProperties &
  Omit<HTMLAttributes<HTMLElement>, "color">;
