import { HTMLAttributes, ReactNode } from "react";
import { AccordionBody, AccordionItem, AccordionHeader } from "./components";
import { AccordionProperties } from "@rarui/typings";

export interface AccordionComponents {
  Body: typeof AccordionBody;
  Item: typeof AccordionItem;
  Header: typeof AccordionHeader;
}

export interface AccordionTyping extends AccordionProperties {
  /**
   * The content of the accordion.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type AccordionProps = AccordionTyping &
  Omit<HTMLAttributes<HTMLElement>, "color">;
