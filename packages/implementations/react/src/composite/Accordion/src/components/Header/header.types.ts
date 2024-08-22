import { ButtonHTMLAttributes, ReactNode } from "react";
import { AccordionHeaderProps as AccordionHeaderTyping } from "@rarui/typings";

export interface AccordionHeaderProperties extends AccordionHeaderTyping {
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

export type AccordionHeaderProps = AccordionHeaderProperties &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">;
