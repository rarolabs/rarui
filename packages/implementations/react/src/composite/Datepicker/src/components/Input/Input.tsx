import React, { LegacyRef, forwardRef } from "react";
import { CalendarEventOutlinedIcon } from "@rarui/icons";
import { Input as RaruiInput } from "@rarui-react/input";
import { Icon } from "@rarui-react/icon";

import { DatepickerInputProps } from "./input.types";

const DatepickerInput: React.FC<DatepickerInputProps> = forwardRef(
  (
    {
      className: _className,
      style: _style,
      input,
      ...props
    }: DatepickerInputProps,
    ref,
  ) => (
    <RaruiInput
      ref={ref as LegacyRef<HTMLInputElement>}
      divider={true}
      leadingEnd={<Icon source={<CalendarEventOutlinedIcon />} />}
      {...props}
      {...input}
    />
  ),
);

DatepickerInput.displayName = "Datepicker.Input";
export { DatepickerInput };
