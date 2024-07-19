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
  /**
   * A callback function that is called when a tab is clicked.
   * This function receives the index of the selected tab as a parameter.
   * @TJS-type (tab: number) => void
   */
  onSelectTab?: (tab: number) => void;
}

export type TabsItemProps = TabsItemProperties &
  ButtonHTMLAttributes<HTMLButtonElement>;
