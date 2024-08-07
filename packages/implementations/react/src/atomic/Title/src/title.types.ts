import { ReactNode, HTMLAttributes } from "react";
import { TitleProperties } from "@rarui/typings";

export interface TitleTyping extends TitleProperties {
  /**
   * The content of the title.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type TitleProps = TitleTyping &
  Omit<HTMLAttributes<HTMLHeadingElement>, "color">;
