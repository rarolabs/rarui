import { ButtonHTMLAttributes, ReactNode } from "react";

interface ItemTypings {
  /**
   * The content of the modal header.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
  active?: boolean;
}

export type ItemProperties = ItemTypings;
export type ItemProps = ItemProperties &
  ButtonHTMLAttributes<HTMLButtonElement>;
