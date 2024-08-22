import { HTMLAttributes, ReactNode } from "react";
import { AccordionBodyProps as AccordionBodyTyping } from "@rarui/typings";

export interface AccordionBodyProperties extends AccordionBodyTyping {
  /**
   * The content of the accordion body.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type AccordionBodyProps = AccordionBodyProperties &
  Omit<HTMLAttributes<HTMLElement>, "color">;
