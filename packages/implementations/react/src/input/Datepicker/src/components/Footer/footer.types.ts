import { ButtonHTMLAttributes } from "react";
import { DatepickerFooterProps as DatepickerFooterProperties } from "@rarui/typings";

export type DatepickerFooterProps = DatepickerFooterProperties &
  ButtonHTMLAttributes<HTMLButtonElement>;
