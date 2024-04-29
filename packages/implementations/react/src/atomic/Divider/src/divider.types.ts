import { HTMLAttributes } from "react";
import { DividerSprinkle } from "@rarui/styles";

export interface DividerProperties extends DividerSprinkle {
  /**
   * The direction of the Divider.
   */
  direction?: "vertical" | "horizontal";
}

export type DividerProps = DividerProperties &
  Omit<HTMLAttributes<HTMLDivElement>, "type">;
