import { InputHTMLAttributes, ReactNode } from "react";
import { ToggleProperties } from "@rarui/typings";

export interface ToggleTyping extends ToggleProperties {
  icons?: {
    unchecked?: ReactNode;
    checked?: ReactNode;
  };
}

export type ToggleProps = ToggleTyping &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
