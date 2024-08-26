import { InputHTMLAttributes } from "react";
import { InputProps } from "packages/implementations/react/src/input/Input/src";

export interface DatepickerInputProperties {
  input?: InputProps;
}

export type DatepickerInputProps = DatepickerInputProperties &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
