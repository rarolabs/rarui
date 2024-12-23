import React, { useMemo, useRef, useState } from "react";
import { dropdown } from "@rarui/styles";
import {
  useFloating,
  useInteractions,
  FloatingPortal,
  useClick,
  useDismiss,
  flip,
  shift,
  arrow as arrowUI,
  offset as offsetUI,
  size,
  autoUpdate,
} from "@floating-ui/react";

import { DropdownComponents, DropdownProps } from "./dropdown.types";
import { DropdownItem } from "./components";

const Dropdown: React.FC<DropdownProps> & DropdownComponents = ({
  className: _className,
  style: _style,
  children,
  content,
  visible,
  portalId,
  offset = 10,
  enabledDismiss = true,
  enabledClick = true,
  enabledFlip = true,
  matchReferenceWidth = false,
  position = "bottom-start",
  padding = "base",
  onVisibility,
  ...rest
}: DropdownProps) => {
  const arrowRef = useRef(null);
  const [isVisible, setVisibility] = useState(false);

  const open: boolean = useMemo(
    () => (visible === undefined ? isVisible : visible),
    [visible, isVisible],
  );

  const middlewares = [
    offsetUI(offset),
    arrowUI({
      element: arrowRef,
    }),
    shift(),
    enabledFlip &&
      flip({
        crossAxis: position.includes("-"),
        fallbackAxisSideDirection: "end",
        padding: 5,
      }),
    matchReferenceWidth &&
      size({
        apply({ rects, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
          });
        },
      }),
  ].filter((middleware) => middleware !== false);

  const { context, floatingStyles } = useFloating({
    open,
    placement: position,
    strategy: "fixed",
    middleware: middlewares,
    whileElementsMounted: autoUpdate,
    onOpenChange: onVisibility !== undefined ? onVisibility : setVisibility,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context, {
      enabled: enabledClick,
    }),
    useDismiss(context, {
      enabled: enabledDismiss,
    }),
  ]);

  const { className, style, otherProps } = dropdown.sprinkle(rest);

  return (
    <>
      <div
        data-testid="dropdown-container"
        ref={context.refs.setReference}
        {...getReferenceProps()}
      >
        {typeof children === "function"
          ? children({
              open,
              setVisibility,
            })
          : children}
      </div>
      <FloatingPortal id={portalId ?? "theme-provider"}>
        {open && (
          <div
            {...otherProps}
            ref={context.refs.setFloating}
            className={[
              dropdown.classnames.dropdown({ padding }),
              className,
            ].join(" ")}
            style={{
              ...style,
              ...floatingStyles,
            }}
            {...getFloatingProps()}
          >
            {content}
          </div>
        )}
      </FloatingPortal>
    </>
  );
};

Dropdown.Item = DropdownItem;

Dropdown.displayName = "Dropdown";
Dropdown.Item.displayName = "Dropdown.Item";

export { Dropdown };
