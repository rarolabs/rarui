import { ReactNode, HTMLAttributes } from "react";
import { TextProperties } from "@rarui/typings";

export interface TextTyping extends TextProperties {
  /**
   * The content of the link.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type TextProps = TextTyping &
  Omit<HTMLAttributes<HTMLParagraphElement>, "color">;
