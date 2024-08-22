import { HTMLAttributes, ReactNode } from "react";
import { CardProps as CardTyping } from "@rarui/typings";
import { CardBody, CardHeader } from "./components";

export interface CardComponents {
  Body: typeof CardBody;
  Header: typeof CardHeader;
}

export interface CardProperties extends CardTyping {
  /**
   * The content of the card. This prop accepts any React node.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type CardProps = CardProperties & HTMLAttributes<HTMLElement>;
