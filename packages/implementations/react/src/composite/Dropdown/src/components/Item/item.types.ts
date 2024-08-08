import { DropdownItemProperties } from "@rarui/typings";
import { HTMLAttributes, ReactNode } from "react";

interface DropdownItemTyping extends DropdownItemProperties {
  /**
   * The content of the dropdown item. This can include text, icons, or other React elements.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
  /**
   * An icon to be displayed alongside the dropdown item. This can be used to provide a visual representation of the item.
   * @TJS-type React.ReactNode
   */
  icon?: ReactNode;
}

export type DropdownItemProps = DropdownItemTyping &
  HTMLAttributes<HTMLElement>;
