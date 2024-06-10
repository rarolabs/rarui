import { ButtonHTMLAttributes, ReactNode } from "react";
import { InputProperties } from "../../input.types";

export interface InputLeadingTyping {
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

export type InputLeadingProperties = InputLeadingTyping &
  Pick<InputProperties, "divider" | "appearance" | "size">;

export type InputLeadingProps = InputLeadingProperties &
  ButtonHTMLAttributes<HTMLButtonElement>;
