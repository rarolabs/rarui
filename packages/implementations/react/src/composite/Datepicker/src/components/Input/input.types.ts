import { InputHTMLAttributes } from "react";
import { InputProps } from "@rarui-react/input";

export interface DatepickerInputProperties {
  input?: InputProps;
}

export type DatepickerInputProps = DatepickerInputProperties &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
