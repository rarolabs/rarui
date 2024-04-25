import { ReactNode, HTMLAttributes } from "react";
import { BoxSprinkle } from "@rarui/styles";

export interface BoxProperties extends BoxSprinkle {
  /**
   * Element to be rendered inside the Box component.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type _BoxProps = BoxProperties &
  Omit<HTMLAttributes<HTMLElement>, "color">;
