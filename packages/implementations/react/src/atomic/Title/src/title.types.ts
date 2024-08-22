import { ReactNode, HTMLAttributes } from "react";
import { TitleProps as TitleTyping } from "@rarui/typings";

export interface TitleProperties extends TitleTyping {
  /**
   * The content of the title.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type TitleProps = TitleProperties &
  Omit<HTMLAttributes<HTMLHeadingElement>, "color">;
