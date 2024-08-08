import { HTMLAttributes, ReactNode } from "react";
import { SidebarProperties } from "@rarui/typings";

export interface SidebarTyping extends SidebarProperties {
  /**
   * The content of the sidebar.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type SidebarProps = SidebarTyping & HTMLAttributes<HTMLDivElement>;
