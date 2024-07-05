import React, { useMemo, useRef, useState } from "react";
import { tooltip } from "@rarui/styles";
import {
  useFloating,
  useHover,
  useInteractions,
  safePolygon,
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

import { TooltipComponents, TooltipProps } from "./tooltip.types";
import { TooltipBody, TooltipFooter, TooltipHeader } from "./components";
import { Box } from "@rarui-react/box";

const Tooltip: React.FC<TooltipProps> & TooltipComponents = ({
  className: _className,
  style: _style,
  children,
  content,
  visible,
  portalId,
  arrow = true,
  offset = 10,
  enabledHover = true,
  enabledDismiss = true,
  enabledClick = true,
  matchReferenceWidth = false,
  position = "bottom",
  padding = "base",
  inverted = false,
  onVisibility,
  ...rest
}: TooltipProps) => {
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

  const { context, floatingStyles } = useFloating({
    open,
    placement: position,
    strategy: "fixed",
    middleware: middlewares,
    whileElementsMounted: autoUpdate,
    onOpenChange: onVisibility !== undefined ? onVisibility : setVisibility,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useHover(context, {
      enabled: enabledHover,
      restMs: 50,
      delay: {
        close: 100,
      },
      handleClose: safePolygon({
        buffer: 1,
      }),
    }),
    useClick(context, {
      enabled: enabledClick,
    }),
    useDismiss(context, {
      enabled: enabledDismiss,
    }),
  ]);

  return (
    <>
      <div
        data-testid="tooltip-container"
        ref={context.refs.setReference}
        className={tooltip.classnames.container}
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
            {...rest}
            ref={context.refs.setFloating}
            className={tooltip.classnames.tooltip({ inverted, padding })}
            style={{
              ...floatingStyles,
            }}
            {...getFloatingProps()}
          >
            {content}
            {arrow && (
              <Box
                as={FloatingArrow}
                data-testid="arrow-element"
                ref={arrowRef}
                context={context}
                fill="$secondary"
              />
            )}
          </div>
        )}
      </FloatingPortal>
    </>
  );
};

Tooltip.Body = TooltipBody;
Tooltip.Footer = TooltipFooter;
Tooltip.Header = TooltipHeader;

Tooltip.displayName = "Tooltip";
Tooltip.Footer.displayName = "Tooltip.Footer";
Tooltip.Body.displayName = "Tooltip.Body";
Tooltip.Header.displayName = "Tooltip.Header";

export { Tooltip };
