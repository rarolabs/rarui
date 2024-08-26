import { HTMLAttributes, ReactNode } from "react";

export interface ModalFooterProperties {
  /**
   * The content of the accordion body.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type ModalFooterProps = ModalFooterProperties &
  Omit<HTMLAttributes<HTMLElement>, "color">;
