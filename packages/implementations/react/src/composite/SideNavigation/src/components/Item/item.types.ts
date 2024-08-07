import { ButtonHTMLAttributes, ReactNode } from "react";
import { SideNavigationItemProperties } from "@rarui/typings";

interface SideNavigationItemTypings extends SideNavigationItemProperties {
  /**
   * The content of the modal header.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type SideNavigationItemProps = SideNavigationItemTypings &
  ButtonHTMLAttributes<HTMLButtonElement>;
