import { ButtonHTMLAttributes, ReactNode } from "react";
import { TabsButtonProps as TabsButtonTyping } from "@rarui/typings";

export interface TabsButtonProperties extends TabsButtonTyping {
  /**
   * The content of the accordion body.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type TabsButtonProps = TabsButtonProperties &
  ButtonHTMLAttributes<HTMLButtonElement>;
