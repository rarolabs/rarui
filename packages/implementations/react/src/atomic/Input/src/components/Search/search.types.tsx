import { InputHTMLAttributes } from "react";
import { InputProperties } from "../../input.types";

export interface InputSearchTyping {}

export type InputSearchProperties = InputSearchTyping &
  Pick<InputProperties, "divider" | "appearance" | "size">;

export type _InputSearchProps = InputSearchProperties &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
