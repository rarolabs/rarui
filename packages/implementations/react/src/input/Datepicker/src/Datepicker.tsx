import React, { createRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { datepicker } from "@rarui/styles";
import Picker from "react-datepicker";

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
  popperModifiers,
  popperPlacement,
  onChange,
  ...props
}) => {
  const [date, setDate] = useState(selected);
  const datePickerRef = createRef<{
    setSelected: (newDate: Date | null) => void;
  }>();

  return (
    <Picker
      ref={datePickerRef as any}
      portalId={portalId ?? "theme-provider"}
      calendarClassName={datepicker.classnames.datepicker}
      dayClassName={() => datepicker.classnames.day}
      weekDayClassName={() => datepicker.classnames.weekday}
      timeClassName={() => datepicker.classnames.time}
      customInput={
        customInput ?? <DatepickerInput input={{ ...input, disabled }} />
      }
      // isClearable
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
      onChange={(newDate: Date) => {
        onChange(newDate);
        setDate(newDate);
      }}
      popperPlacement={popperPlacement}
      popperModifiers={popperModifiers}
      {...props}
    >
      <DatepickerFooter
        setSelected={() => datePickerRef.current?.setSelected(new Date())}
        clear={() => {
          datePickerRef.current?.setSelected(null);
          setDate(null);
          onChange(null);
        }}
      />
    </Picker>
  );
};

Datepicker.displayName = "Datepicker";

export { Datepicker };
