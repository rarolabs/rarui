import { ButtonHTMLAttributes, ReactNode } from "react";
import { SideNavigationProperties } from "@rarui/typings";

import { SideNavigationItem } from "./components";

export interface SideNavigationComponents {
  Item: typeof SideNavigationItem;
}

export interface SideNavigationTyping extends SideNavigationProperties {
  /**
   * The content of the sideNavigation.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
  /**
   * Componet to be displayed on start input.
   * @TJS-type React.ReactNode
   */
  leadingStart?: ReactNode;
  /**
   * Componet to be displayed on end input.
   * @TJS-type React.ReactNode
   */
  leadingEnd?: ReactNode;
}

export type _SideNavigationProps = SideNavigationTyping &
  ButtonHTMLAttributes<HTMLButtonElement>;
