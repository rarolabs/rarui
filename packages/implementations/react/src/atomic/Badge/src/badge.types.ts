import { ReactNode, HTMLAttributes } from "react";
import { BadgeProperties } from "@rarui/typings";

export interface BadgeTyping {
  /**
   * The content displayed within the badge. This can be text, icons, or any other ReactNode.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
}

export type BadgeProps = BadgeProperties & HTMLAttributes<HTMLDivElement>;
