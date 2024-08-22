import { SkeletonSprinkle } from "@rarui/styles";

export interface SkeletonProps extends SkeletonSprinkle {
  /**
   * This is an attribute used to identify a DOM node for testing purposes.
   */
  "data-testid"?: string;
}
