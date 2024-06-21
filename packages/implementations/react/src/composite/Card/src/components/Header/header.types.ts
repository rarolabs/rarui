import { HTMLAttributes, ReactNode } from "react";

export interface CardHeaderTyping {
  /**
   * The content of the card header. This prop accepts any React node.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
  /**
   * The title of the card. This is typically displayed prominently in the header section.
   */
  title?: string;
  /**
   * The description of the card. This is typically displayed below the title in the header section.
   */
  description?: string;
}

export type CardHeaderProperties = CardHeaderTyping;

export type CardHeaderProps = CardHeaderProperties &
  Omit<HTMLAttributes<HTMLElement>, "color">;
