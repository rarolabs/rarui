import { ButtonHTMLAttributes, ReactNode } from "react";
import { InputProperties } from "../../input.types";

export interface LeadingTyping {
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

export type LeadingProperties = LeadingTyping &
  Pick<InputProperties, "divider" | "appearance" | "size">;

export type LeadingProps = LeadingProperties &
  ButtonHTMLAttributes<HTMLButtonElement>;
