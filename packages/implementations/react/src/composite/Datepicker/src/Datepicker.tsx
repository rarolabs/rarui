import React, { createRef, useState } from "react";
import Picker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { datepicker } from "@rarui/styles";

import { DatepickerProps } from "./datepicker.types";
import {
  DatepickerFooter,
  DatepickerHeader,
  DatepickerInput,
} from "./components";

const Datepicker: React.FC<DatepickerProps> = ({
  className: _className,
  style: _style,
  showYearPicker,
  showMonthYearPicker,
  input,
  customInput,
  portalId,
  selected,
  disabled,
  onChange,
  ...props
}) => {
  const [date, setDate] = useState(selected);
  const datePickerRef = createRef<{ setSelected: (date: Date) => void }>();

  return (
    <Picker
      ref={datePickerRef as any}
      portalId={portalId ?? "theme-provider"}
      calendarClassName={datepicker.classnames.datepicker}
      dayClassName={() => datepicker.classnames.day}
      weekDayClassName={() => datepicker.classnames.weekday}
      timeClassName={() => datepicker.classnames.time}
      customInput={
        customInput ?? (
          <DatepickerInput input={{ ...input, disabled: disabled }} />
        )
      }
      renderCustomHeader={(headerProps) => (
        <DatepickerHeader
          showYearPicker={showYearPicker}
          showMonthYearPicker={showMonthYearPicker}
          {...headerProps}
        />
      )}
      showPopperArrow={false}
      showTimeInput={false}
      todayButton={false}
      showYearPicker={showYearPicker}
      showMonthYearPicker={showMonthYearPicker}
      selected={selected !== undefined ? selected : date}
      onChange={(date: Date) => {
        if (date) {
          onChange(date);
          setDate(date);
        }
      }}
      {...props}
    >
      <DatepickerFooter
        setSelected={() => datePickerRef.current?.setSelected(new Date())}
      />
    </Picker>
  );
};

Datepicker.displayName = "Datepicker";

export { Datepicker };
