import React, { OlHTMLAttributes } from "react";
import { BreadcrumbProps as BreadcrumbTyping } from "@rarui/typings";
import { BreadcrumbItem } from "./components";

export interface BreadcrumbComponents {
  Item: typeof BreadcrumbItem;
}

export interface BreadcrumbProperties extends BreadcrumbTyping {
  /**
   * The content of the breadcrumbs, which should be one or more Breadcrumb.Item components or other React nodes.
   * @TJS-type React.ReactNode
   */
  children?: React.ReactNode | React.ReactNode[];
}

export type BreadcrumbProps = BreadcrumbProperties &
  Omit<OlHTMLAttributes<HTMLOListElement>, "children">;
