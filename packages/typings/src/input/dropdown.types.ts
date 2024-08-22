import { DropdownSprinkle, DropdownVariants } from "@rarui/styles";

interface DropdownTyping {
  /**
   * A common feature of select dropdowns is that the dropdown matches the width of the reference regardless of its contents.
   * @default false
   */
  matchReferenceWidth?: boolean;
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

export type DropdownProps = DropdownTyping &
  DropdownSprinkle &
  Pick<DropdownVariants, "padding">;
