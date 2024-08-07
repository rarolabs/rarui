import { ButtonHTMLAttributes, ReactNode } from "react";
import { AccordionHeaderProperties } from "@rarui/typings";

export interface AccordionHeaderTyping extends AccordionHeaderProperties {
  /**
   * The content of the accordion header.
   * @TJS-type React.ReactNode | ((data: { selected: string; index: string }) => React.ReactNode);
   */
  children?:
    | ReactNode
    | ((data: { selected: string; index: string }) => ReactNode);
  /**
   * The SVG contents to display in the accordion header.
   * @TJS-type React.ReactNode
   */
  icon?: ReactNode;
}

export type AccordionHeaderProps = AccordionHeaderTyping &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;
