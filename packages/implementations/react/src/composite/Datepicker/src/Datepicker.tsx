import React, { createRef } from "react";
import Picker, { registerLocale } from "react-datepicker";
import { ptBR } from "date-fns/locale/pt-BR";

import "react-datepicker/dist/react-datepicker.css";
import { datepicker } from "@rarui/styles";

import { DatepickerProps } from "./datepicker.types";
import { Footer, Header, Input } from "./components";

const Datepicker: React.FC<DatepickerProps> = ({
  className: _className,
  style: _style,
  children,
  showYearPicker,
  showMonthYearPicker,
  input,
  customInput,
  ...props
}) => {
  const datePickerRef = createRef<{ setSelected: (date: Date) => void }>();
  registerLocale("pt-BR", ptBR);

  return (
    <Picker
      ref={datePickerRef as any}
      portalId="theme-provider"
      locale="pt-BR"
      calendarClassName={datepicker.classnames.datepicker}
      dayClassName={() => datepicker.classnames.day}
      weekDayClassName={() => datepicker.classnames.weekday}
      timeClassName={() => datepicker.classnames.time}
      customInput={customInput ? customInput : <Input {...input} />}
      renderCustomHeader={(props) => (
        <Header
          showYearPicker={showYearPicker}
          showMonthYearPicker={showMonthYearPicker}
          {...props}
        />
      )}
      showPopperArrow={false}
      showTimeInput={false}
      todayButton={false}
      showYearPicker={showYearPicker}
      showMonthYearPicker={showMonthYearPicker}
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
