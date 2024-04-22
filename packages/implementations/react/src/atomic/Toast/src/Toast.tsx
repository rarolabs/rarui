import React, { useContext } from "react";
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

const Toast: React.FC<ToastProps> = ({
  className: _className,
  style: _style,
  children,
  variant = "info",
  size = "medium",
  title,
  id,
  ...props
}) => {
  const { dismissToast } = useContext(ToastContext);
  const Icons = ICON_BY_VARIANT[variant];
  return (
    <div {...props} className={toast.classnames.toast({ variant, size })}>
      <Icon
        data-testid={`toast-icon-${variant}`}
        source={<Icons size={size === "medium" ? 32 : 24} />}
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
