import { HTMLAttributes, ReactNode } from "react";

export interface CardBodyProperties {
  /**
   * The content of the card body. This prop accepts any React node.
   * @TJS-type ReactNode
   */
  children?: ReactNode;
}

export type CardBodyProps = CardBodyProperties &
  Omit<HTMLAttributes<HTMLElement>, "color">;
