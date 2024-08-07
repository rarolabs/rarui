import { HTMLAttributes, ReactNode } from "react";
import { BreadcrumbItemProperties } from "@rarui/typings";

interface BreadcrumbItemTyping extends BreadcrumbItemProperties {
  /**
   * The content of the breadcrumb item. This can include text, icons, or other React elements.
   * @TJS-type React.ReactNode
   */
  children?: ReactNode;
  /**
   * An icon to be displayed alongside the breadcrumb item.
   * This can be used to provide a visual representation of the item.
   */
  icon?: ReactNode;
}

export type BreadcrumbItemProps = BreadcrumbItemTyping &
  HTMLAttributes<HTMLElement>;
