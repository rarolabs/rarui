import { InputHTMLAttributes, ReactNode } from "react";
import { ToggleVariants } from "@rarui/styles";

export interface ToggleTyping {
  /**
   * The name of the input element.
   */
  name: string;
  /**
   * Sets toggle state to activated or deactivated.
   */
  selected?: boolean;
  /**
   * Text to be rendered inside the component
   */
  label?: string;
  /**
   * The content of the icons. Receives an object with 2 optional props, "unchecked" and "checked" both as ReactNode.
   * @TJS-type React.ReactNode
   */
  icons?: {
    unchecked?: ReactNode;
    checked?: ReactNode;
  };
}

type ToggleProperties = ToggleTyping & ToggleVariants;

export type ToggleProps = ToggleProperties &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
