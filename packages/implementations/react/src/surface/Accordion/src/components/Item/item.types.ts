import { ReactNode } from "react";
import { AccordionItemProps as AccordionItemTyping } from "@rarui/typings";

export interface AccordionItemProperties extends AccordionItemTyping {
  /**
   * The content of the accordion body.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type AccordionItemProps = AccordionItemProperties;
