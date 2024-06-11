import { HTMLAttributes, ReactNode } from "react";

export interface ModalBodyTyping {
  /**
   * The content of the accordion body.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type ModalBodyProperties = ModalBodyTyping;
export type ModalBodyProps = ModalBodyProperties &
  Omit<HTMLAttributes<HTMLElement>, "color">;
