import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Box } from "@rarui-react/box";

import { Datepicker } from "./index";
import docs from "./datepicker.docs.json";

const meta: Meta<typeof Datepicker> = {
  title: "Composite/Datepicker",
  render: (args) => {
    const [date, setDate] = useState(new Date());
    return (
      <Box display="flex" justifyContent="center">
        <Datepicker
          {...args}
          selected={date}
          onChange={(date) => setDate(date as Date)}
        />
      </Box>
    );
  },
  component: Datepicker,
  argTypes: argTypesConvert(docs),
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Datepicker>;

export const basic: Story = {};

export const yearPicker: Story = {
  args: {
    showYearPicker: true,
    dateFormat: "yyyy",
  },
};

export const monthPicker: Story = {
  args: {
    showYearPicker: true,
    dateFormat: "MM/yyyy",
  },
};

export const withTimePicker: Story = {
  args: {
    showTimeSelect: true,
    dateFormat: "MMMM d, yyyy h:mm aa",
  },
};

export const rangePicker: Story = {
  render: (args) => {
    const defaultStartDate = new Date("2024-08-01");
    const defaultEndDate = new Date("2024-09-01");
    const [startDate, setStartDate] = useState(defaultStartDate);
    const [endDate, setEndDate] = useState(defaultEndDate);

    const handleChange = ([newStartDate, newEndDate]: [Date, Date]) => {
      setStartDate(newStartDate);
      setEndDate(newEndDate);
    };

    return (
      <Box display="flex" justifyContent="center">
        <Datepicker
          {...args}
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          onChange={(dates) => handleChange(dates as [Date, Date])}
        />
      </Box>
    );
  },
  args: {
    showTimeSelect: true,
    selectsRange: true,
    dateFormat: "MMMM d, yyyy h:mm aa",
  },
};
