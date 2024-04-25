import React from "react";
import { Button } from "@rarui-react/button";
import { banner } from "@rarui/styles";
import { Icon } from "@rarui-react/icon";
import { CloseIcon } from "@rarui/icons";
import { BannerProps } from "./banner.types";

const NEUTRAL_COLORS = ["brand", "info", "neutral"];

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
      <Button
        variant="text"
        size="medium"
        appearance={
          NEUTRAL_COLORS.includes(appearance) ? "neutral" : "inverted"
        }
        onClick={onClose}
        data-testid="close-button"
      >
        <Icon source={<CloseIcon size={24} />} />
      </Button>
    )}
  </div>
);

Banner.displayName = "Banner";

export { Banner };
