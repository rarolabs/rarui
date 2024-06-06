import { HTMLAttributes, ReactNode } from "react";
import { StepperVariants } from "@rarui/styles";
import { Body, Item, Header } from "./components";

export interface AccordionComponents {
  Body: typeof Body;
  Item: typeof Item;
  Header: typeof Header;
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

export type AccordionProperties = AccordionTyping & StepperVariants;

export type AccordionProps = AccordionProperties & HTMLAttributes<HTMLElement>;
