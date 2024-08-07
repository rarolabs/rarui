import { HTMLAttributes, ReactNode } from "react";
import { TabsProperties } from "@rarui/typings";
import { TabsItem } from "./components";

export interface TabsComponents {
  Item: typeof TabsItem;
}

export interface TabsTyping extends TabsProperties {
  /**
   * The content of the tabs component.
   * This prop accepts one or more Tabs.Item components or other React nodes.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type TabsProps = TabsTyping & Omit<HTMLAttributes<HTMLElement>, "color">;
