import { HTMLAttributes, ReactNode } from "react";
import { Placement } from "@floating-ui/react";
import { TooltipVariants } from "@rarui/styles";
import { TooltipBody, TooltipHeader, TooltipFooter } from "./components";

export interface TooltipComponents {
  Body: typeof TooltipBody;
  Footer: typeof TooltipFooter;
  Header: typeof TooltipHeader;
}

interface TooltipTyping {
  /**
   * An HTML element, or a function that returns one. It's used to set the position of the popover.
   * @TJS-type React.ReactNode | ((data: { open: boolean, setVisibility: (visibility: boolean) => void }) => React.ReactNode);
   */
  children:
    | ReactNode
    | ((data: {
        open: boolean;
        setVisibility: (visibility: boolean) => void;
      }) => ReactNode);
  /**
   * The content of the popover.
   * @TJS-type React.ReactNode
   */
  content: ReactNode;
  /**
   * Conditional for displaying the popover arrow.
   * @default true
   */
  arrow?: boolean;
  /**
   * A common feature of select dropdowns is that the dropdown matches the width of the reference regardless of its contents.
   * @default false
   */
  matchReferenceWidth?: boolean;
  /**
   * Position of the popover.
   * @default bottom
   */
  position?: Placement;
  /**
   * Adds hover event listeners that change the open state, like CSS :hover.
   * @default false
   */
  enabledHover?: boolean;
  /**
   * Adds click event listeners that change the open state.
   * @default true
   */
  enabledClick?: boolean;
  /**
   * Adds listeners that dismiss (close) the floating element.
   * @default true
   */
  enabledDismiss?: boolean;
  /**
   * Offest displaces the floating element from its core placement along the specified axes.
   * @default 10
   */
  offset?: number;
  /**
   * Specifies the ID of the portal element where the tooltip should be rendered.
   * This can be useful for rendering the tooltip in a different part of the DOM, such as a modal or overlay.
   */
  portalId?: string;
  /**
   * If true, the component is shown.
   */
  visible?: boolean;
  /**
   * Function to control popover opening and closing.
   * @TJS-type (visible: boolean) => void;
   */
  onVisibility?: (visible: boolean) => void;
}

export type TooltipProperties = TooltipTyping & TooltipVariants;

export type TooltipProps = TooltipProperties &
  Omit<HTMLAttributes<HTMLDivElement>, "content">;
