import { AccordionVariants } from "@rarui/styles";

export interface AccordionHeaderTyping {
  /**
   * The title to display in the accordion header.
   */
  title?: string;
  /**
   * The subtitle to display in the accordion header.
   */
  subtitle?: string;
  /**
   * Removes the arrow icon that shows if the accordion item is open or not which makes it possible to create a custom indicator.
   * @default false
   */
  noIconToggle?: boolean;
}

export type AccordionHeaderProps = AccordionHeaderTyping &
  Pick<AccordionVariants, "size">;
