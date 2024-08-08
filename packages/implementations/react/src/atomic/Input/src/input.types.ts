import { InputHTMLAttributes, ReactNode } from "react";
import type { InputProperties } from "@rarui/typings";
import { InputLeading, InputPassword, InputSearch } from "./components";

export interface InputComponents {
  Leading: typeof InputLeading;
  Password: typeof InputPassword;
  Search: typeof InputSearch;
}

export interface InputTyping extends InputProperties {
  /**
   * Componet to be displayed on start input.
   * @TJS-type React.ReactNode
   */
  leadingStart?: ReactNode;
  /**
   * Componet to be displayed on end input.
   * @TJS-type React.ReactNode
   */
  leadingEnd?: ReactNode;
}

export type _InputProps = InputTyping &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
