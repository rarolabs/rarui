import { ButtonHTMLAttributes, ReactNode } from "react";
import { TabsVariants } from "@rarui/styles";

export interface TabsButtonTyping {
  /**
   * The content of the accordion body.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type TabsButtonProperties = TabsButtonTyping &
  Pick<TabsVariants, "underlined" | "selected">;

export type TabsButtonProps = TabsButtonProperties &
  ButtonHTMLAttributes<HTMLButtonElement>;
