import { SidebarSprinkle, SidebarVariants } from "@rarui/styles";

export interface SidebarTyping {
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

export type SidebarProperties = SidebarTyping &
  SidebarSprinkle &
  SidebarVariants;
