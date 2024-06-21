import { HTMLAttributes, ReactNode } from "react";
import { CardSprinkle, CardVariants } from "@rarui/styles";
import { CardBody, CardHeader } from "./components";

export interface CardComponents {
  Body: typeof CardBody;
  Header: typeof CardHeader;
}

export interface CardTyping {
  /**
   * The content of the card. This prop accepts any React node.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type CardProperties = CardTyping & CardVariants & CardSprinkle;

export type CardProps = CardProperties & HTMLAttributes<HTMLElement>;
