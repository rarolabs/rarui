import { BreadcrumbVariants } from "@rarui/styles";

interface BreadcrumbItemTyping {
  /**
   * The name of the breadcrumb item. This is typically the text that is displayed for the item.
   */
  name?: string;
}

export type BreadcrumbItemProperties = BreadcrumbItemTyping &
  BreadcrumbVariants;
