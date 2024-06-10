import React, { OlHTMLAttributes } from "react";
import { BreadcrumbItem } from "./components";

export interface BreadcrumbComponents {
  Item: typeof BreadcrumbItem;
}

export interface BreadcrumbProperties {
  /**
   * Specifies the number of breadcrumb items to display after truncation.
   * This is useful for managing the display of long breadcrumb lists.
   * @default 10
   */
  itensAfterTruncate?: number;
  /**
   * The content of the breadcrumbs, which should be one or more Breadcrumb.Item components or other React nodes.
   * @TJS-type React.ReactNode
   */
  children?: React.ReactNode | React.ReactNode[];
}

export type BreadcrumbProps = BreadcrumbProperties &
  Omit<OlHTMLAttributes<HTMLOListElement>, "children">;
