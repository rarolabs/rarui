import React, { useMemo, useRef, useState } from "react";
import { dropdown, useTheme } from "@rarui/styles";
import {
  useFloating,
  useInteractions,
  FloatingPortal,
  FloatingArrow,
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
import { Item } from "./components";

const Dropdown: React.FC<DropdownProps> & DropdownComponents = ({
  className: _className,
  style: _style,
  children,
  content,
  visible,
  arrow = false,
  offset = 10,
  enabledDismiss = true,
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

  const { refThemeProvider } = useTheme();

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
      enabled: true,
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
        className={dropdown.classnames.container}
        {...getReferenceProps()}
      >
        {typeof children === "function"
          ? children({
              open,
              setVisibility,
            })
          : children}
      </div>
      <FloatingPortal
        id="rarui-dropdown-floating"
        root={refThemeProvider?.current}
      >
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
            {arrow && (
              <FloatingArrow
                data-testid="arrow-element"
                ref={arrowRef}
                context={context}
                fill="currentColor"
              />
            )}
          </div>
        )}
      </FloatingPortal>
    </>
  );
};

Dropdown.Item = Item;

Dropdown.displayName = "Dropdown";
Dropdown.Item.displayName = "Dropdown.Item";

export { Dropdown };
