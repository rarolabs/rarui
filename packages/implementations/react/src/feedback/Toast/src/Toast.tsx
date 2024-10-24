import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { toast } from "@rarui/styles";
import { CloseIcon } from "@rarui/icons";
import { Icon } from "@rarui-react/icon";
import { Text } from "@rarui-react/text";
import { IconButton } from "@rarui-react/icon-button";
import { Box } from "@rarui-react/box";

import {
  getAppearanceIconButton,
  getSourceIcon,
  getColorIcon,
} from "./toast.definitions";
import { ToastComponents, ToastProps } from "./toast.types";
import { ToastProvider } from "./components";
import { useToast } from "./hooks";

const Toast: React.FC<ToastProps> & ToastComponents = ({
  className: _className,
  style: _style,
  children,
  appearance = "info",
  variant = "solid",
  size = "medium",
  width = "420px",
  autoClose = true,
  onClose,
  duration = 4000,
  title,
  id,
  ...rest
}: ToastProps) => {
  const { className, style, otherProps } = toast.sprinkle({ ...rest, width });

  const closeIntervalRef = useRef<any>();
  const animationIntervalRef = useRef<any>();

  const [show, setShow] = useState(false);
  const { closeToast } = useToast();

  const close = useCallback(() => {
    // start animation
    setShow(true);
    closeIntervalRef.current = setInterval(() => {
      // remove animation
      setShow(false);
      animationIntervalRef.current = setTimeout(() => {
        // remove toast in list
        closeToast(id);
      }, 200); // this timeout is to allow render the out transition
    }, duration);
  }, [
    setShow,
    closeToast,
    id,
    duration,
    closeIntervalRef,
    animationIntervalRef,
  ]);

  useEffect(() => {
    if (autoClose) {
      close();
    }
    return () => {
      // clear interval animation
      clearInterval(closeIntervalRef?.current);
      clearInterval(animationIntervalRef?.current);
    };
  }, [close, autoClose]);

  const isVisible = useMemo(() => show || !autoClose, [autoClose, show]);
  const SourceIcon = getSourceIcon[appearance];

  return (
    <div
      {...otherProps}
      className={[
        toast.classnames.toast({ appearance, variant, size }),
        className,
      ].join(" ")}
      data-testid="toast-element"
      style={{
        ...style,
        display: isVisible ? "flex" : "none",
      }}
    >
      <Box alignSelf={children ? "flex-start" : "auto"}>
        <Icon
          data-testid={`toast-icon-${appearance}`}
          source={<SourceIcon size={size !== "small" ? size : 20} />}
          color={getColorIcon[variant][appearance]}
        />
      </Box>
      <div className={toast.classnames.content}>
        {title && (
          <Text
            fontSize={size === "large" ? "$m" : "$s"}
            lineHeight={size === "large" ? "$l" : "$m"}
            fontWeight="$medium"
          >
            {title}
          </Text>
        )}
        {children}
      </div>
      <IconButton
        onClick={() => {
          closeToast(id);
          if (onClose) {
            onClose();
          }
        }}
        data-testid="dismiss-button"
        variant="ghost"
        appearance={
          appearance === "neutral"
            ? "inverted"
            : getAppearanceIconButton[variant]
        }
        source={<CloseIcon size="medium" />}
        rounded
      />
    </div>
  );
};

Toast.Provider = ToastProvider;
Toast.displayName = "Toast";
Toast.Provider.displayName = "Toast.Provider";

export { Toast };
