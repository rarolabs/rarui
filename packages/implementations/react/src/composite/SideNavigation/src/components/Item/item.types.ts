import { SideNavigationItemVariants } from "@rarui/styles";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface SideNavigationItemTypings {
  /**
   * The content of the modal header.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;

  /**
   * Determines if the item is active or not.
   */
  active?: boolean;
}

export type SideNavigationItemProperties = SideNavigationItemTypings &
  SideNavigationItemVariants;
export type SideNavigationItemProps = SideNavigationItemProperties &
  ButtonHTMLAttributes<HTMLButtonElement>;
