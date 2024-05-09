import React from "react";
import { banner } from "@rarui/styles";
import { CloseIcon } from "@rarui/icons";
import { IconButton } from "@rarui-react/icon-button";

import { BannerProps } from "./banner.types";
import { getColorButtonClose } from "./banner.definitions";

const Banner: React.FC<BannerProps> = ({
  className: _className,
  style: _style,
  children,
  appearance = "brand",
  floating = false,
  onClose,
  ...props
}) => (
  <div
    {...props}
    className={banner.classnames.banner({ appearance, floating })}
  >
    {children}
    {onClose && (
      <IconButton
        data-testid="close-button"
        variant="ghost"
        source={<CloseIcon size="medium" />}
        appearance={getColorButtonClose[appearance] ?? "inverted"}
        onClick={onClose}
        rounded
      />
    )}
  </div>
);

Banner.displayName = "Banner";

export { Banner };
