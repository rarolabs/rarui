import { InputHTMLAttributes } from "react";
import { InputProperties } from "../../input.types";

export interface PasswordTyping {}

export type PasswordProperties = PasswordTyping &
  Pick<InputProperties, "divider" | "appearance" | "size">;

export type _PasswordProps = PasswordProperties &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
