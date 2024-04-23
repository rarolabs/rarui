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
  children,
  ...rest
}) => {
  const { className, style, otherProps } = chip.sprinkle({
    ...rest,
    padding,
  });

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
    >
      {children}
      {closeable && (
        <Icon
          source={<CancelCircleFilledIcon size={16} aria-label="close" />}
        />
      )}
      <span className={chip.classnames.overlay} />
    </button>
  );
};
Chip.displayName = "Chip";

export { Chip };
