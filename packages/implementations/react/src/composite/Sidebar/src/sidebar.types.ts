import { HTMLAttributes, ReactNode } from "react";
import { SidebarSprinkle, SidebarVariants } from "@rarui/styles";

export interface SidebarTyping {
  /**
   * The content of the sidebar.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;

  /**
   * Whether the sidebar is open or not.
   */
  open?: boolean;
  /**
   * Specifies the ID of the portal element where the sidebar should be rendered.
   * This can be useful for rendering the sidebar in a different part of the DOM, such as a modal or overlay.
   */
  portalId?: string;
  /**
   * Callback fired when the component requests to be closed.
   * @TJS-type () => void;
   */
  onRemove?: () => void;
}

type SidebarProperties = SidebarTyping & SidebarSprinkle & SidebarVariants;
export type SidebarProps = SidebarProperties & HTMLAttributes<HTMLDivElement>;
