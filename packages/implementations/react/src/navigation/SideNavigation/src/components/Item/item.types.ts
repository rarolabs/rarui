import { ButtonHTMLAttributes, ReactNode } from "react";
import { SideNavigationItemProps as SideNavigationItemTypings } from "@rarui/typings";

interface SideNavigationItemProperties extends SideNavigationItemTypings {
  /**
   * The content of the modal header.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type SideNavigationItemProps = SideNavigationItemProperties &
  ButtonHTMLAttributes<HTMLButtonElement>;
