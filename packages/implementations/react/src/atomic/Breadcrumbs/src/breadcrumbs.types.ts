import React, { HTMLAttributes } from "react";

export type BreadcrumbsItems = {
  /**
   * Id of teh element, used as key.
   */
  id?: string;
  /**
   * The title of the element, commonly used as a string or a React component in case of icons.
   */
  title?: React.ReactNode;
  /**
   * The link destination.
   */
  href?: string;
};

export type BreadcrumbSeparatorType = {
  index?: any;
};

export interface BreadcrumbsProperties {
  /**
   * An Array of breadcrumbs to display.
   */
  itens: BreadcrumbsItems[];
  /**
   * Maximun number of breadcrumbs displayed.
   * @default 10
   */
  maxItens?: number;
  /**
   * Number of breadcrumbs displayed after the truncate indicator.
   * @default 10
   */
  itensAfterTruncate?: number;
}

export type BreadcrumbsProps = BreadcrumbsProperties &
  HTMLAttributes<HTMLElement>;
