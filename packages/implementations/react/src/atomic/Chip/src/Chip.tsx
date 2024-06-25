import React from "react";
import { chip } from "@rarui/styles";
import { CancelCircleFilledIcon } from "@rarui/icons";
import { Icon } from "@rarui-react/icon";
import { ChipProps } from "./chip.types";

const Chip: React.FC<ChipProps> = ({
  className: _className,
  style: _style,
  pill = false,
  closeable = false,
  size = "medium",
  padding = "$medium",
  selected,
  textOverflow,
  textTransform,
  children,
  disabled,
  onClick,
  ...rest
}) => {
  const { className, style, otherProps } = chip.sprinkle({
    ...rest,
    padding,
    textTransform,
  });

  const dataTestid = (rest as { "data-testid": string })?.["data-testid"];

  return (
    <button
      disabled={disabled}
      type="button"
      className={[
        chip.classnames.chip({
          pill,
          selected,
          size,
          textOverflow,
        }),
        className,
      ].join(" ")}
      style={style}
      {...otherProps}
      onClick={!closeable ? onClick : undefined}
    >
      <span className={chip.classnames.content({ textOverflow })}>
        {children}
      </span>
      {closeable && (
        <span
          className={chip.classnames.close}
          onClick={closeable ? onClick : undefined}
          data-testid={`${dataTestid}-button-close`}
          aria-label="Close"
          aria-disabled={disabled}
          onKeyDown={() => {}}
          onFocus={() => {}}
          tabIndex={0}
          role="button"
        >
          <Icon
            source={<CancelCircleFilledIcon size={16} aria-label="close" />}
          />
        </span>
      )}
      <span className={chip.classnames.overlay} />
    </button>
  );
};

Chip.displayName = "Chip";

export { Chip };
