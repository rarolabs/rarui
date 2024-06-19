import { ButtonHTMLAttributes, ReactNode } from "react";

export interface TabsItemProperties {
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
