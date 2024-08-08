import { InputHTMLAttributes, ReactNode } from "react";
import { ToggleProperties } from "@rarui/typings";

export interface ToggleTyping extends ToggleProperties {
  /**
   * The content of the icons. Receives an object with 2 optional props, "unchecked" and "checked" both as ReactNode.
   */
  icons?: {
    unchecked?: ReactNode;
    checked?: ReactNode;
  };
}

export type ToggleProps = ToggleTyping &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
