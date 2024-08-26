import React from "react";
import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useFloating,
  useDismiss,
  useInteractions,
} from "@floating-ui/react";
import { sidebar } from "@rarui/styles";
import { SidebarProps } from "./sidebar.types";

const Sidebar: React.FC<SidebarProps> = ({
  className: _className,
  style: _style,
  position = "right",
  maxWidth = "375px",
  padding = "$small",
  open = false,
  children,
  portalId,
  onRemove,
  ...rest
}) => {
  const { className, style, otherProps } = sidebar.sprinkle({
    ...rest,
    maxWidth,
    padding,
  });

  const { context } = useFloating({
    open,
    onOpenChange: onRemove,
  });

  const dismiss = useDismiss(context, { outsidePressEvent: "mousedown" });
  const { getFloatingProps } = useInteractions([dismiss]);

  return (
    <FloatingPortal id={portalId ?? "theme-provider"}>
      <FloatingFocusManager context={context}>
        <div
          {...otherProps}
          ref={context.refs.setFloating}
          role={rest.role || "presentation"}
          style={style}
          {...getFloatingProps()}
          className={[
            sidebar.classnames.sidebar({ position, open }),
            className,
          ].join(" ")}
        >
          {children}
        </div>
      </FloatingFocusManager>
      {open && (
        <FloatingOverlay
          className={sidebar.classnames.overlay}
          lockScroll
          data-testid="overlay-sidebar-button"
        />
      )}
    </FloatingPortal>
  );
};

Sidebar.displayName = "SideNavigation";

export { Sidebar };
