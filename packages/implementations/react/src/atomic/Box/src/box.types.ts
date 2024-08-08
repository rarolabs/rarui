import { ReactNode, HTMLAttributes } from "react";
import { BoxProperties } from "@rarui/typings";

export interface BoxTyping extends BoxProperties {
  /**
   * Element to be rendered inside the Box component.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type _BoxProps = BoxTyping & Omit<HTMLAttributes<HTMLElement>, "color">;
