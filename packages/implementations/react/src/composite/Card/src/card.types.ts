import { HTMLAttributes, ReactNode } from "react";
import { CardProperties } from "@rarui/typings";
import { CardBody, CardHeader } from "./components";

export interface CardComponents {
  Body: typeof CardBody;
  Header: typeof CardHeader;
}

export interface CardTyping extends CardProperties {
  /**
   * The content of the card. This prop accepts any React node.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type CardProps = CardProperties & HTMLAttributes<HTMLElement>;
