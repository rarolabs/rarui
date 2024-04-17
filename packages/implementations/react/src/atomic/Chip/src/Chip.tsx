import React from "react";
import { chip } from "@rarui/styles";
import { ChipProps } from "./chip.types";
import { CancelCircleFilledIcon } from "@rarui/icons";
import { Icon } from "@rarui-react/icon";

const Chip: React.FC<ChipProps> = ({
  className: _className,
  style: _style,
  pill = false,
  closeable = false,
  selected,
  avatar,
  children,
  icon,
  ...props
}) => {
  const shortPadding =
    React.isValidElement(icon) || React.isValidElement(avatar) || closeable;

  return (
    <div
      {...props}
      className={chip.classnames.chip({
        pill,
        selected,
        shortPadding,
      })}
    >
      {(avatar && <Icon source={avatar} data-testid="avatar-icon" />) ||
        (icon && <Icon source={icon} data-testid="icon" />)}
      {children}
      {closeable && (
        <Icon
          source={<CancelCircleFilledIcon size={16} aria-label="close" />}
        />
      )}

      <span className={chip.classnames.overlay} />
    </div>
  );
};
Chip.displayName = "Chip";

export { Chip };
