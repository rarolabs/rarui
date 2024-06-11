import React, { useMemo } from "react";
import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useClick,
  useDismiss,
  useFloating,
  useId,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { useTheme, modal } from "@rarui/styles";
import { Box } from "@rarui-react/box";
import { ModalBody, ModalFooter, ModalHeader } from "./components";
import { ModalManager } from "./contexts";
import { ModalComponents, ModalProps } from "./modal.types";

const Modal: React.FC<ModalProps> & ModalComponents = ({
  className: _className,
  style: _style,
  open = false,
  padding = "base",
  maxWidth = { xs: "100%", md: "500px" },
  children,
  portalId,
  onDismiss,
  ...rest
}: ModalProps) => {
  const { refThemeProvider } = useTheme();

  const { context } = useFloating({
    open,
    onOpenChange: onDismiss,
  });

  const click = useClick(context);
  const role = useRole(context);
  const dismiss = useDismiss(context, { outsidePressEvent: "mousedown" });

  const { getFloatingProps } = useInteractions([click, role, dismiss]);

  const headingId = useId();
  const descriptionId = useId();

  const { className, style, otherProps } = modal.sprinkle({
    ...rest,
    maxWidth,
  });

  const contextManager = useMemo(
    () => ({
      open,
      onDismiss,
    }),
    [onDismiss],
  );

  return (
    <FloatingPortal
      id={portalId ?? "rarui-modal"}
      root={refThemeProvider?.current}
    >
      {open && (
        <ModalManager.Provider value={contextManager}>
          <FloatingFocusManager context={context}>
            <Box
              position="fixed"
              top="0"
              bottom="0"
              left="0"
              right="0"
              display="flex"
              justifyContent="center"
              alignItems="center"
              zIndex="$700"
            >
              <div
                {...otherProps}
                ref={context.refs.setFloating}
                style={style}
                aria-labelledby={headingId}
                aria-describedby={descriptionId}
                {...getFloatingProps()}
                className={[
                  modal.classnames.modal({ padding }),
                  className,
                ].join(" ")}
              >
                {children}
              </div>
            </Box>
          </FloatingFocusManager>
        </ModalManager.Provider>
      )}
      {open && (
        <FloatingOverlay
          className={modal.classnames.overlay}
          lockScroll
          data-testid="overlay-modal-button"
        />
      )}
    </FloatingPortal>
  );
};

Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Header = ModalHeader;
Modal.displayName = "Modal";
Modal.Body.displayName = "Modal.Body";
Modal.Footer.displayName = "Modal.Footer";
Modal.Header.displayName = "Modal.Header";

export { Modal };
