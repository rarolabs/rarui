import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { dropdown } from "@rarui/styles";
import { Icon } from "@rarui-react/icon";
import { Box } from "@rarui-react/box";
import {
  PolymorphicForwardRefComponent,
  useRefObjectAsForwardedRef,
} from "../../../../../types";
import { DropdownItemProps } from "./item.types";

const DropdownItem = forwardRef(
  (
    {
      className: _className,
      style: _styles,
      as: As = "button",
      children,
      name,
      icon,
      selected,
      ...props
    }: DropdownItemProps & { as: any },
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
        !(innerRef.current instanceof HTMLLabelElement) &&
        !(innerRef.current instanceof HTMLButtonElement)
      ) {
        console.error(
          "Error: Found `Dropdown.Item` component that renders an inaccessible element",
          innerRef.current,
          "Please ensure `Dropdown.Item` always renders as <a>, <label> or <button>",
        );
      }
    }, [innerRef]);

    return (
      <As
        {...props}
        className={dropdown.classnames.item({ selected })}
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
) as PolymorphicForwardRefComponent<"button" | "a", DropdownItemProps>;

DropdownItem.displayName = "Dropdown.Item";
export { DropdownItem };
