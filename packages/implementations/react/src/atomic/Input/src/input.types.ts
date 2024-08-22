import { InputHTMLAttributes, ReactNode } from "react";
import { InputProps as InputTypings } from "@rarui/typings";
import { InputLeading, InputPassword, InputSearch } from "./components";

export interface InputComponents {
  Leading: typeof InputLeading;
  Password: typeof InputPassword;
  Search: typeof InputSearch;
}

export interface InputProperties extends InputTypings {
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

export type _InputProps = InputProperties &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
