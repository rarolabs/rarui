import { ButtonHTMLAttributes, ReactNode } from "react";
import { TabsItemProps as TabsItemTyping } from "@rarui/typings";

export interface TabsItemProperties extends TabsItemTyping {
  /**
   * Label of the tabpanel. Used to pair with it's corresponding tab control.
   */
  label: string | ReactNode;
  /**
   * The content of the tabs item.
   * @TJS-type ReactNode
   */
  children?: ReactNode;
}

export type TabsItemProps = TabsItemProperties &
  ButtonHTMLAttributes<HTMLButtonElement>;
