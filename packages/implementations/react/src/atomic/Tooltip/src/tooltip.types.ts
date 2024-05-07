import { HTMLAttributes, ReactNode } from "react";
import { Placement } from "@floating-ui/react";
import { TooltipVariants } from "@rarui/styles";
import { Body, Header, Footer } from "./components";

export interface TooltipComponents {
  Body: typeof Body;
  Footer: typeof Footer;
  Header: typeof Header;
}

interface Tooltip {
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
   * If true, the component is shown.
   */
  visible?: boolean;
  /**
   * Function to control popover opening and closing.
   * @TJS-type (visible: boolean) => void;
   */
  onVisibility?: (visible: boolean) => void;
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
}

export type TooltipProperties = Tooltip & TooltipVariants;

export type TooltipProps = TooltipProperties &
  Omit<HTMLAttributes<HTMLDivElement>, "content">;
