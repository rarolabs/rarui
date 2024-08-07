import { ButtonHTMLAttributes } from "react";

export interface DatepickerFooterProperties {
  setSelected?: () => void;
  clear?: () => void;
}

export type DatepickerFooterProps = DatepickerFooterProperties &
  ButtonHTMLAttributes<HTMLButtonElement>;
