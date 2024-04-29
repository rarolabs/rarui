import { ReactNode, HTMLAttributes } from "react";
import { BadgeVariants } from "@rarui/styles";

export interface Badge {
  /**
   * The content of the button.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type BadgeProperties = BadgeVariants;

export type BadgeProps = BadgeProperties & HTMLAttributes<HTMLDivElement>;
