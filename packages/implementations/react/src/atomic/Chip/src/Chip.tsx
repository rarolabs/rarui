import React, { forwardRef } from "react";
import { chip } from "@rarui/styles";
import { CancelCircleFilledIcon } from "@rarui/icons";
import { Icon } from "@rarui-react/icon";
import { ChipProps } from "./chip.types";

const Chip: React.FC<ChipProps> = forwardRef(
  (
    {
      className: _className,
      style: _style,
      pill = false,
      closeable = false,
      size = "medium",
      padding = "$medium",
      selected,
      children,
      onClick,
      ...rest
    },
    ref,
  ) => {
    const { className, style, otherProps } = chip.sprinkle({
      ...rest,
      padding,
    });
    const dataTestid = (rest as { "data-testid": string })?.["data-testid"];

    return (
      <button
        {...otherProps}
        {...style}
        type="button"
        className={[
          chip.classnames.chip({
            pill,
            selected,
            size,
          }),
          className,
        ].join(" ")}
        onClick={!closeable ? onClick : undefined}
      >
        {children}
        {closeable && (
          <span
            className={chip.classnames.close}
            onClick={closeable ? onClick : undefined}
            data-testid={`${dataTestid}-button-close`}
          >
            <Icon
              source={<CancelCircleFilledIcon size={16} aria-label="close" />}
            />
          </span>
        )}
        <span className={chip.classnames.overlay} />
      </button>
    );
  },
);

Chip.displayName = "Chip";

export { Chip };
