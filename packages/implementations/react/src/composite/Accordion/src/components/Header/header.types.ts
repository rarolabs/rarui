import { HTMLAttributes, ReactNode } from "react";
import { AccordionVariants } from "@rarui/styles";

export interface AccordionHeaderTypings {
  /**
   * The content of the accordion header.
   * @TJS-type React.ReactNode | ((data: { selected: string; index: string }) => React.ReactNode);
   */
  children?:
    | ReactNode
    | ((data: { selected: string; index: string }) => ReactNode);
  /**
   * The title to display in the accordion header.
   */
  title?: string;
  /**
   * The subtitle to display in the accordion header.
   */
  subtitle?: string;
  /**
   * The SVG contents to display in the accordion header.
   * @TJS-type React.ReactNode
   */
  icon?: ReactNode;
  /**
   * Removes the arrow icon that shows if the accordion item is open or not which makes it possible to create a custom indicator.
   * @default false
   */
  noIconToggle?: boolean;
}

export type AccordionHeaderProperties = AccordionHeaderTypings &
  Pick<AccordionVariants, "size">;

export type AccordionHeaderProps = AccordionHeaderProperties &
  Omit<HTMLAttributes<HTMLElement>, "children">;
