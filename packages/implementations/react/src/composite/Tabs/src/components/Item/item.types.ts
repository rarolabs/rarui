import { ButtonHTMLAttributes, ReactNode } from "react";
import { TabsItemProperties } from "@rarui/typings";

export interface TabsItemTyping extends TabsItemProperties {
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

export type TabsItemProps = TabsItemTyping &
  ButtonHTMLAttributes<HTMLButtonElement>;
