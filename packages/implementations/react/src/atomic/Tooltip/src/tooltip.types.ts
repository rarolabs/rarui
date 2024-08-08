import { HTMLAttributes, ReactNode } from "react";
import { Placement } from "@floating-ui/react";
import { TooltipProperties } from "@rarui/typings";
import { TooltipBody, TooltipHeader, TooltipFooter } from "./components";

export interface TooltipComponents {
  Body: typeof TooltipBody;
  Footer: typeof TooltipFooter;
  Header: typeof TooltipHeader;
}

interface TooltipTyping extends TooltipProperties {
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
   * Position of the popover.
   * @default bottom
   */
  position?: Placement;
}

export type TooltipProps = TooltipTyping &
  Omit<HTMLAttributes<HTMLDivElement>, "content">;
