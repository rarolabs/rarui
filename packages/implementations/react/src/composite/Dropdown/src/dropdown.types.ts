import { HTMLAttributes, ReactNode } from "react";
import { Placement } from "@floating-ui/react";
import { DropdownSprinkle, DropdownVariants } from "@rarui/styles";
import { DropdownItem } from "./components";

export interface DropdownComponents {
  Item: typeof DropdownItem;
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
   * Adds click event listeners that change the open state.
   * @default true
   */
  enabledClick?: boolean;
  /**
   * Determines whether the dropdown should enable flipping the options' dropdown when there is not enough space to display it in its default direction.
   * This can help ensure the dropdown is always visible on the screen.
   * @default true
   */
  enabledFlip?: boolean;
  /**
   * Offest displaces the floating element from its core placement along the specified axes.
   * @default 10
   */
  offset?: number;
  /**
   * Specifies the ID of the portal element where the dropdown should be rendered.
   * This can be useful for rendering the dropdown in a different part of the DOM, such as a modal or overlay.
   */
  portalId?: string;
  /**
   * If true, the component is shown.
   */
  visible?: boolean;
  /**
   * Function to control dropdown opening and closing.
   * @TJS-type (visible: boolean) => void;
   */
  onVisibility?: (visible: boolean) => void;
}

export type DropdownProperties = DropdownTyping &
  DropdownSprinkle &
  Pick<DropdownVariants, "padding">;

export type DropdownProps = DropdownProperties &
  Omit<HTMLAttributes<HTMLDivElement>, "content">;
