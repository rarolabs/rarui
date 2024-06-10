import React, { createRef } from "react";
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
  onChange,
  ...props
}) => {
  const datePickerRef = createRef<{ setSelected: (date: Date) => void }>();

  return (
    <Picker
      ref={datePickerRef as any}
      portalId={portalId ?? "theme-provider"}
      calendarClassName={datepicker.classnames.datepicker}
      dayClassName={() => datepicker.classnames.day}
      weekDayClassName={() => datepicker.classnames.weekday}
      timeClassName={() => datepicker.classnames.time}
      customInput={customInput ?? <DatepickerInput {...input} />}
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
      onChange={(date: Date) => date && onChange(date)}
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
