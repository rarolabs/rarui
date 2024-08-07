import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { breadcrumb } from "@rarui/styles";
import {
  PolymorphicForwardRefComponent,
  useRefObjectAsForwardedRef,
} from "../../../../../types";
import { Icon } from "@rarui-react/icon";
import { Box } from "@rarui-react/box";
import { BreadcrumbItemProps } from "./item.types";

const BreadcrumbItem = forwardRef(
  (
    {
      className: _className,
      style: _styles,
      as: As = "button",
      children,
      name,
      icon,
      active,
      ...props
    }: BreadcrumbItemProps & { as: any },
    ref,
  ) => {
    const innerRef = useRef<HTMLButtonElement>(null);
    useRefObjectAsForwardedRef(ref, innerRef);

    useImperativeHandle<
      HTMLButtonElement | HTMLAnchorElement | null,
      HTMLButtonElement | null
    >(ref, () => innerRef?.current);

    useEffect(() => {
      if (
        innerRef.current &&
        !(innerRef.current instanceof HTMLAnchorElement) &&
        !(innerRef.current instanceof HTMLButtonElement)
      ) {
        console.error(
          "Error: Found `Button` component that renders an inaccessible element",
          innerRef.current,
          "Please ensure `Button` always renders as <a> or <button>",
        );
      }
    }, [innerRef]);

    return (
      <As
        {...props}
        className={breadcrumb.classnames.item({ active })}
        ref={innerRef}
      >
        {(name || icon) && (
          <Box display="flex" gap="$3xs">
            <Icon source={icon} />
            {name}
          </Box>
        )}
        {children}
      </As>
    );
  },
) as PolymorphicForwardRefComponent<"button" | "a", BreadcrumbItemProps>;

BreadcrumbItem.displayName = "Dropdown.Item";
export { BreadcrumbItem };
