import React, { useContext, useEffect } from "react";
import { toast } from "@rarui/styles";
import { Icon } from "@rarui-react/icon";
import { Text } from "@rarui-react/text";
import {
  CloseIcon,
  InfoCircleFilledIcon,
  CheckCircleFilledIcon,
  DangerFilledIcon,
  BookmarkFilledIcon,
} from "@rarui/icons";
import { ToastProps } from "./toast.types";
import { ToastContext } from "./context/ToastProvider";

const ICON_BY_VARIANT = {
  info: InfoCircleFilledIcon,
  success: CheckCircleFilledIcon,
  warning: InfoCircleFilledIcon,
  error: DangerFilledIcon,
  neutral: BookmarkFilledIcon,
  invert: BookmarkFilledIcon,
};

const ICON_COLOR = {
  info: "$info",
  success: "$success",
  warning: "$warning-alt",
  error: "$error",
  neutral: "$invert",
  invert: "$primary",
} as const;

const ICON_COLOR_SOLID = {
  info: "$on-info",
  success: "$on-success",
  warning: "$on-warning",
  error: "$on-error",
  neutral: "$invert",
  invert: "$primary",
} as const;

const Toast: React.FC<ToastProps> = ({
  className: _className,
  style: _style,
  children,
  appearance = "info",
  variant = "solid",
  size = "medium",
  duration = 0,
  title,
  id,
  ...props
}) => {
  const { dismissToast } = useContext(ToastContext);
  const Icons = ICON_BY_VARIANT[appearance];
  const IconColor =
    variant === "solid" ? ICON_COLOR_SOLID[appearance] : ICON_COLOR[appearance];

  const handleDismissToastRef = React.useRef<any>();
  handleDismissToastRef.current = dismissToast;

  useEffect(() => {
    if (!duration) {
      return;
    }
    const timeoutId = window.setTimeout(
      () => handleDismissToastRef.current(id),
      duration,
    );

    return () => window.clearTimeout(timeoutId);
  }, [id]);

  return (
    <div
      {...props}
      className={toast.classnames.toast({ appearance, variant, size })}
    >
      <Icon
        data-testid={`toast-icon-${appearance}`}
        source={<Icons size={size === "medium" ? 32 : 24} />}
        color={IconColor}
      />
      <div className={toast.classnames.content}>
        {title && (
          <Text fontSize="$m" lineHeight="$m" fontWeight="$medium">
            {title}
          </Text>
        )}
        <Text fontSize="$s" lineHeight="$s" style={{ flex: 1 }}>
          {children}
        </Text>
      </div>

      <div
        className={toast.classnames.closeButton}
        onClick={() => dismissToast(id)}
        data-testid="dismiss-button"
      >
        <Icon source={<CloseIcon />} />
      </div>
    </div>
  );
};

Toast.displayName = "Toast";
export { Toast };
