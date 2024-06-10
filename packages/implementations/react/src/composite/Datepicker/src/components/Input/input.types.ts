import { InputHTMLAttributes } from "react";

export interface DatepickerInputProperties {}

export type DatepickerInputProps = DatepickerInputProperties &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
