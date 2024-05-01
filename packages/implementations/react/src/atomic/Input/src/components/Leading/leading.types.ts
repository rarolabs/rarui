import { ButtonHTMLAttributes, ReactNode } from "react";
import { InputProperties } from "../../input.types";

export interface Leading {
  /**
   * The content of the Leading.
   * @TJS-type React.ReactNode
   */
  children: ReactNode;
  /**
   * Sent Leading display position.
   */
  position: "start" | "end";
}

export type LeadingProperties = Leading &
  Pick<InputProperties, "divider" | "appearance" | "size">;

export type LeadingProps = LeadingProperties &
  ButtonHTMLAttributes<HTMLButtonElement>;
