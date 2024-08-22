import { HTMLAttributes, ReactNode } from "react";
import { CardHeaderProps as CardHeaderTyping } from "@rarui/typings";

export interface CardHeaderProperties extends CardHeaderTyping {
  /**
   * The content of the card header. This prop accepts any React node.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type CardHeaderProps = CardHeaderProperties &
  Omit<HTMLAttributes<HTMLElement>, "color">;
