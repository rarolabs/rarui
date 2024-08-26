import React from "react";
import {
  CalendarEventOutlinedIcon,
  CancelCircleOutlinedIcon,
} from "@rarui/icons";
import { Box } from "@rarui-react/box";
import { Icon } from "@rarui-react/icon";
import { Button } from "@rarui-react/button";

import { DatepickerFooterProps } from "./footer.types";

const DatepickerFooter: React.FC<DatepickerFooterProps> = ({
  className: _className,
  style: _style,
  setSelected,
  clear,
  ...props
}) => {
  const dataTestid = (props as { "data-testid": string })?.["data-testid"];

  return (
    <div style={{ clear: "both" }}>
      <Box
        justifyContent="space-between"
        borderWidth="$none"
        borderColor="$divider"
        borderTopWidth="$1"
        borderStyle="solid"
        py="$2xs"
        px="$s"
        display="flex"
      >
        <Button
          type="button"
          size="small"
          variant="tonal"
          onClick={setSelected}
          data-testid={dataTestid ?? "today-button"}
          {...props}
        >
          <Icon source={<CalendarEventOutlinedIcon />} />
          Hoje
        </Button>
        <Button
          type="button"
          size="small"
          variant="tonal"
          onClick={clear}
          data-testid={dataTestid ?? "clear-button"}
          {...props}
        >
          <Icon source={<CancelCircleOutlinedIcon />} />
          Limpar
        </Button>
      </Box>
    </div>
  );
};

DatepickerFooter.displayName = "Datepicker.Footer";
export { DatepickerFooter };
