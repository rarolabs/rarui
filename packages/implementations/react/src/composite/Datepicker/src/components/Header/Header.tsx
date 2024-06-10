import React, { useMemo } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@rarui/icons";
import { Box } from "@rarui-react/box";
import { IconButton } from "@rarui-react/icon-button";
import { Text } from "@rarui-react/text";

import { getLabelDate, getYearsPickerRangeStart } from "./header.definitions";
import { DatepickerHeaderProps } from "./header.types";

const DatepickerHeader: React.FC<DatepickerHeaderProps> = ({
  decreaseYear,
  increaseYear,
  decreaseMonth,
  increaseMonth,
  prevYearButtonDisabled,
  nextYearButtonDisabled,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
  date,
  showYearPicker,
  showMonthYearPicker,
}) => {
  const typeYear = useMemo(
    () => showYearPicker || showMonthYearPicker,
    [showYearPicker, showMonthYearPicker],
  );

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap="$2xs"
      backgroundColor="$secondary"
      py="$2xs"
      px="$3xs"
    >
      <IconButton
        data-testid="decrease-button"
        appearance="neutral"
        variant="outlined"
        source={<ChevronLeftIcon size="medium" />}
        onClick={typeYear ? decreaseYear : decreaseMonth}
        disabled={typeYear ? prevYearButtonDisabled : prevMonthButtonDisabled}
      />
      <Box display="flex" alignItems="center" gap="$4xs">
        <Text fontWeight="$semiBold" color="$primary" fontSize="$m">
          {!typeYear && getLabelDate(date, "MMMM")}{" "}
          {!showYearPicker && getLabelDate(date, "yyyy")}
          {showYearPicker && getYearsPickerRangeStart(date).join(" - ")}
        </Text>
      </Box>
      <IconButton
        data-testid="increase-button"
        appearance="neutral"
        variant="outlined"
        source={<ChevronRightIcon size="medium" />}
        onClick={typeYear ? increaseYear : increaseMonth}
        disabled={typeYear ? nextYearButtonDisabled : nextMonthButtonDisabled}
      />
    </Box>
  );
};

DatepickerHeader.displayName = "Datepicker.Header";
export { DatepickerHeader };
