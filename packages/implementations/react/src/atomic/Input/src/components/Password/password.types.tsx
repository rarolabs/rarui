import { InputHTMLAttributes } from "react";
import { InputProperties } from "../../input.types";

export interface InputPasswordTyping {}

export type InputPasswordProperties = InputPasswordTyping &
  Pick<InputProperties, "divider" | "appearance" | "size">;

export type _InputPasswordProps = InputPasswordProperties &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
