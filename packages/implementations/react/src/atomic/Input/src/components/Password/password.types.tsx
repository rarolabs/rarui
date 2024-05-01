import { InputHTMLAttributes } from "react";
import { InputProperties } from "../../input.types";

export interface Password {}

export type PasswordProperties = Password &
  Pick<InputProperties, "divider" | "appearance" | "size">;

export type _PasswordProps = PasswordProperties &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
