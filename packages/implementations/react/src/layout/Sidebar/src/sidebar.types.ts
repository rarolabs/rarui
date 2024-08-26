import { HTMLAttributes, ReactNode } from "react";
import { SidebarProps as SidebarTyping } from "@rarui/typings";

export interface SidebarProperties extends SidebarTyping {
  /**
   * The content of the sidebar.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type SidebarProps = SidebarProperties & HTMLAttributes<HTMLDivElement>;
