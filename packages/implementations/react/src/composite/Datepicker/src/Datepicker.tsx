import React, { createRef } from "react";
import Picker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { datepicker } from "@rarui/styles";

import { DatepickerProps } from "./datepicker.types";
import { Footer, Header, Input } from "./components";

const Datepicker: React.FC<DatepickerProps> = ({
  className: _className,
  style: _style,
  showYearPicker,
  showMonthYearPicker,
  input,
  customInput,
  onChange,
  ...props
}) => {
  const datePickerRef = createRef<{ setSelected: (date: Date) => void }>();

  return (
    <Picker
      ref={datePickerRef as any}
      portalId="theme-provider"
      locale="pt-BR"
      calendarClassName={datepicker.classnames.datepicker}
      dayClassName={() => datepicker.classnames.day}
      weekDayClassName={() => datepicker.classnames.weekday}
      timeClassName={() => datepicker.classnames.time}
      customInput={customInput ?? <Input {...input} />}
      renderCustomHeader={(headerProps) => (
        <Header
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
      <Footer
        setSelected={() => datePickerRef.current?.setSelected(new Date())}
      />
    </Picker>
  );
};

Datepicker.displayName = "Datepicker";

export { Datepicker };
