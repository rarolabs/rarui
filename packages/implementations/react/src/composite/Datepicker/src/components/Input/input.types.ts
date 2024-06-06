import { InputHTMLAttributes } from "react";

export interface InputProperties {}

export type InputProps = InputProperties &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
