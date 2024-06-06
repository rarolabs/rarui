import React, { LegacyRef, forwardRef } from "react";

import { CalendarEventOutlinedIcon } from "@rarui/icons";
import { Input as RaruiInput } from "@rarui-react/input";
import { Icon } from "@rarui-react/icon";

import { InputProps } from "./input.types";

const Input: React.FC<InputProps> = forwardRef(
  ({ className: _className, style: _style, ...props }, ref) => (
    <RaruiInput
      ref={ref as LegacyRef<HTMLInputElement>}
      divider={false}
      leadingEnd={<Icon source={<CalendarEventOutlinedIcon />} />}
      {...props}
    />
  ),
);

Input.displayName = "Datepicker.Input";
export { Input };
