import { ButtonHTMLAttributes } from "react";

export interface DatepickerFooterProperties {
  setSelected?: () => void;
}

export type DatepickerFooterProps = DatepickerFooterProperties &
  ButtonHTMLAttributes<HTMLButtonElement>;
