import { ButtonHTMLAttributes, ReactNode } from "react";

interface ItemTypings {
  /**
   * The content of the modal header.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;

  /**
   * Determines if the item is active or not.
   */
  active?: boolean;
}

export type ItemProperties = ItemTypings;
export type ItemProps = ItemProperties &
  ButtonHTMLAttributes<HTMLButtonElement>;
