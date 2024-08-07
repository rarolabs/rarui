import { HTMLAttributes } from "react";
import { DividerProperties } from "@rarui/typings";

export interface DividerTyping extends DividerProperties {
  /**
   * The direction of the Divider.
   */
  direction?: "vertical" | "horizontal";
}

export type DividerProps = DividerProperties &
  Omit<HTMLAttributes<HTMLDivElement>, "type">;
