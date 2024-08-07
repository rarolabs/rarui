import { HTMLAttributes, ReactNode } from "react";
import { CardHeaderProperties } from "@rarui/typings";

export interface CardHeaderTyping extends CardHeaderProperties {
  /**
   * The content of the card header. This prop accepts any React node.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type CardHeaderProps = CardHeaderTyping &
  Omit<HTMLAttributes<HTMLElement>, "color">;
