import { HTMLAttributes, ReactNode } from "react";
import { AccordionBodyProperties } from "@rarui/typings";

export interface AccordionBodyTyping extends AccordionBodyProperties {
  /**
   * The content of the accordion body.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type AccordionBodyProps = AccordionBodyTyping &
  Omit<HTMLAttributes<HTMLElement>, "color">;
