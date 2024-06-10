import { HTMLAttributes, ReactNode } from "react";
import { AccordionVariants } from "@rarui/styles";

export interface AccordionBodyTyping {
  /**
   * The content of the accordion body.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type AccordionBodyProperties = AccordionBodyTyping &
  Pick<AccordionVariants, "padding">;

export type AccordionBodyProps = AccordionBodyProperties &
  Omit<HTMLAttributes<HTMLElement>, "color">;
