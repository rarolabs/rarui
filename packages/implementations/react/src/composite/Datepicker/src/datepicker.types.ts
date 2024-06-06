import { HTMLAttributes } from "react";
import { ReactDatePickerProps } from "react-datepicker";
import { InputProperties, InputProps } from "@rarui-react/input";

export interface DatepickerTyping {
  /**
   * Specifies the input properties for the datepicker component.
   * This should be an object of type InputProperties, which defines various attributes and behaviors for the input field within the datepicker.
   * @TJS-type Input
   */
  input?: InputProperties;
}

type DatepickerProperties = DatepickerTyping;

export type DatepickerProps = ReactDatePickerProps<true, true> &
  HTMLAttributes<HTMLDivElement> &
  Omit<DatepickerProperties, "input"> & {
    input?: InputProps;
  };
