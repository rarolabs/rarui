import { HTMLAttributes, ReactNode } from "react";

interface ItemTyping {
  /**
   * The name of the dropdown item. This is typically the text that is displayed for the item.
   */
  name?: string;
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

export type ItemProperties = ItemTyping;
export type ItemProps = ItemProperties & HTMLAttributes<HTMLElement>;
