import React, { OlHTMLAttributes } from "react";
import { BreadcrumbItem } from "./components";
import { BreadcrumbProperties } from "@rarui/typings";

export interface BreadcrumbComponents {
  Item: typeof BreadcrumbItem;
}

export interface BreadcrumbTyping extends BreadcrumbProperties {
  /**
   * The content of the breadcrumbs, which should be one or more Breadcrumb.Item components or other React nodes.
   * @TJS-type React.ReactNode
   */
  children?: React.ReactNode | React.ReactNode[];
}

export type BreadcrumbProps = BreadcrumbTyping &
  Omit<OlHTMLAttributes<HTMLOListElement>, "children">;
