import { HTMLAttributes, ReactNode } from "react";
import { AccordionProps as AccordionTyping } from "@rarui/typings";
import { AccordionBody, AccordionItem, AccordionHeader } from "./components";

export interface AccordionComponents {
  Body: typeof AccordionBody;
  Item: typeof AccordionItem;
  Header: typeof AccordionHeader;
}

export interface AccordionProperties extends AccordionTyping {
  /**
   * The content of the accordion.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
}

export type AccordionProps = AccordionProperties &
  Omit<HTMLAttributes<HTMLElement>, "color">;
