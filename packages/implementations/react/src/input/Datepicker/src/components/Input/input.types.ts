import { InputHTMLAttributes } from "react";
import { InputProps } from "../../../../Input/src";

export interface DatepickerInputProperties {
  input?: InputProps;
}

export type DatepickerInputProps = DatepickerInputProperties &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
