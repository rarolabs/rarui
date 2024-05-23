import { HTMLAttributes, ReactNode } from "react";
import { Placement } from "@floating-ui/react";
import { DropdownSprinkle, DropdownVariants } from "@rarui/styles";
import { Item } from "./components";

export interface DropdownComponents {
  Item: typeof Item;
}

interface DropdownTyping {
  /**
   * An HTML element, or a function that returns one. It's used to set the position of the dropdown.
   * @TJS-type React.ReactNode | ((data: { open: boolean, setVisibility: (visibility: boolean) => void }) => React.ReactNode);
   */
  children:
    | ReactNode
    | ((data: {
        open: boolean;
        setVisibility: (visibility: boolean) => void;
      }) => ReactNode);
  /**
   * The content of the dropdown.
   * @TJS-type React.ReactNode
   */
  content: ReactNode;
  /**
   * If true, the component is shown.
   */
  visible?: boolean;
  /**
   * Function to control dropdown opening and closing.
   * @TJS-type (visible: boolean) => void;
   */
  onVisibility?: (visible: boolean) => void;
  /**
   * Conditional for displaying the dropdown arrow.
   * @default true
   */
  arrow?: boolean;
  /**
   * A common feature of select dropdowns is that the dropdown matches the width of the reference regardless of its contents.
   * @default false
   */
  matchReferenceWidth?: boolean;
  /**
   * Position of the dropdown.
   * @default bottom
   */
  position?: Placement;
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

export type DropdownProperties = DropdownTyping &
  DropdownVariants &
  DropdownSprinkle;

export type DropdownProps = DropdownProperties &
  Omit<HTMLAttributes<HTMLDivElement>, "content">;
