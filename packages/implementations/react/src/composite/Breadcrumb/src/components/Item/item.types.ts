import { BreadcrumbVariants } from "@rarui/styles";
import { HTMLAttributes, ReactNode } from "react";

interface BreadcrumbItemTypings {
  /**
   * The name of the breadcrumb item. This is typically the text that is displayed for the item.
   */
  name?: string;
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

export type BreadcrumbItemProperties = BreadcrumbItemTypings &
  BreadcrumbVariants;
export type BreadcrumbItemProps = BreadcrumbItemProperties &
  HTMLAttributes<HTMLElement>;
