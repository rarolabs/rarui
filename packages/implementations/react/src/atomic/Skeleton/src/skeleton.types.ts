import { HTMLAttributes } from "react";
import { SkeletonProperties } from "@rarui/typings";

export interface SkeletonTyping extends SkeletonProperties {
  /**
   * This is an attribute used to identify a DOM node for testing purposes.
   */
  "data-testid"?: string;
}

export type SkeletonProps = SkeletonTyping & HTMLAttributes<HTMLDivElement>;
