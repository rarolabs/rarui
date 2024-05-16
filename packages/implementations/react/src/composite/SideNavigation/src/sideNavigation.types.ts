import { ButtonHTMLAttributes, ReactNode } from "react";
import { SideNavigationVariants } from "@rarui/styles";

import { Item } from "./components";

export interface SideNavigationComponents {
  Item: typeof Item;
}

export interface SideNavigationTyping {
  /**
   * The content of the sideNavigation.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
  name: string;
  description?: string;
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

type SideNavigationProperties = SideNavigationTyping & SideNavigationVariants;
export type _SideNavigationProps = SideNavigationProperties &
  ButtonHTMLAttributes<HTMLButtonElement>;
