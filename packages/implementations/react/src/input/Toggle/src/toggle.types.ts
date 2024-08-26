import { InputHTMLAttributes, ReactNode } from "react";
import { ToggleProps as ToggleTyping } from "@rarui/typings";

export interface ToggleProperties extends ToggleTyping {
  /**
   * The content of the icons. Receives an object with 2 optional props, "unchecked" and "checked" both as ReactNode.
   */
  icons?: {
    unchecked?: ReactNode;
    checked?: ReactNode;
  };
}

export type ToggleProps = ToggleProperties &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
