import { HTMLAttributes, ReactNode } from "react";

export interface ModalBodyProperties {
  /**
   * The content of the accordion body.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type ModalBodyProps = ModalBodyProperties &
  Omit<HTMLAttributes<HTMLElement>, "color">;
