import { ReactNode } from "react";
import { AccordionItemProperties } from "@rarui/typings";

export interface AccordionItemTyping extends AccordionItemProperties {
  /**
   * The content of the accordion body.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type AccordionItemProps = AccordionItemTyping;
