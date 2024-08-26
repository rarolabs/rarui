import { ReactNode, HTMLAttributes } from "react";
import { TextProps as TextTyping } from "@rarui/typings";

export interface TextProperties extends TextTyping {
  /**
   * The content of the link.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type TextProps = TextProperties &
  Omit<HTMLAttributes<HTMLParagraphElement>, "color">;
