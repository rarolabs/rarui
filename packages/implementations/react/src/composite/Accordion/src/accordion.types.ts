import { HTMLAttributes, ReactNode } from "react";
import { AccordionBody, AccordionItem, AccordionHeader } from "./components";

export interface AccordionComponents {
  Body: typeof AccordionBody;
  Item: typeof AccordionItem;
  Header: typeof AccordionHeader;
}

export interface AccordionTyping {
  /**
   * The content of the accordion.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
  /**
   * Informs which accordion item is open by default, this value must be the same as informed in the index of each item
   */
  selectedDefault?: string;
}

export type AccordionProperties = AccordionTyping;

export type AccordionProps = AccordionProperties &
  Omit<HTMLAttributes<HTMLElement>, "color">;
