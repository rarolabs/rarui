import React from "react";

import { CalendarEventOutlinedIcon } from "@rarui/icons";
import { Box } from "@rarui-react/box";
import { Icon } from "@rarui-react/icon";

import { Button } from "@rarui-react/button";
import { FooterProps } from "./footer.types";

const Footer: React.FC<FooterProps> = ({
  className: _className,
  style: _style,
  setSelected,
  ...props
}) => {
  const dataTestid = (props as { "data-testid": string })?.["data-testid"];

  return (
    <div style={{ clear: "both" }}>
      <Box
        justifyContent="center"
        borderWidth="$none"
        borderColor="$divider"
        borderTopWidth="$1"
        borderStyle="solid"
        py="$2xs"
        px="$xs"
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
      </Box>
    </div>
  );
};

Footer.displayName = "Datepicker.Footer";
export { Footer };
