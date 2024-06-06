import { HTMLAttributes } from "react";
import {
  ReactDatePickerCustomHeaderProps,
  ReactDatePickerProps,
} from "react-datepicker";

export type HeaderProps = ReactDatePickerCustomHeaderProps &
  Pick<ReactDatePickerProps, "showYearPicker" | "showMonthYearPicker"> &
  HTMLAttributes<HTMLDivElement>;
