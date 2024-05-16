import { HTMLAttributes, ReactNode } from "react";
import { SidebarSprinkle, SidebarVariants } from "@rarui/styles";

export interface SidebarTyping {
  /**
   * The content of the sidebar.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
  /**
   * Callback fired when the component requests to be closed.
   * () => void;
   */
  onRemove?: () => void;
  /**
   * Determines if the sidebar is shown or not.
   * @default true
   */
  open?: boolean;
}

type SidebarProperties = SidebarTyping & SidebarSprinkle & SidebarVariants;
export type SidebarProps = SidebarProperties & HTMLAttributes<HTMLDivElement>;
