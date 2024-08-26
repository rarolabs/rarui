import { ReactNode, HTMLAttributes } from "react";
import { BoxProps as BoxTypings } from "@rarui/typings";

export interface BoxProperties extends BoxTypings {
  /**
   * Element to be rendered inside the Box component.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type _BoxProps = BoxProperties &
  Omit<HTMLAttributes<HTMLElement>, "color">;
