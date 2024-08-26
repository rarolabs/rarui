import React from "react";
import { BadgeProps as BadgeTyping } from "@rarui/typings";

export interface BadgeProperties extends BadgeTyping {
  /**
   * The content displayed within the badge. This can be text, icons, or any other ReactNode.
   * @TJS-type React.ReactNode
   */
  children: React.ReactNode;
}

export type BadgeProps = BadgeProperties & React.HTMLAttributes<HTMLDivElement>;
