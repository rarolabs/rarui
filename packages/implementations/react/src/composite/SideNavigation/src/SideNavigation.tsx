import React, {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
  useState,
  ComponentPropsWithRef,
} from "react";
import {
  PolymorphicForwardRefComponent,
  useRefObjectAsForwardedRef,
} from "@rarui/typings";
import { sideNavigation } from "@rarui/styles";
import { ArrowDownIcon, ArrowUpIcon } from "@rarui/icons";
import { Box } from "@rarui-react/box";
import { Icon } from "@rarui-react/icon";

import { Item } from "./components";
import {
  _SideNavigationProps,
  SideNavigationComponents,
} from "./sideNavigation.types";

const SideNavigation = forwardRef(
  (
    {
      className: _className,
      style: _styles,
      as: As = "button",
      children,
      name,
      description,
      active,
      disabled,
      leadingStart,
      leadingEnd,
      ...props
    }: _SideNavigationProps & { as: any },
    ref,
  ) => {
    const [open, setOpen] = useState(active);
    const handleOpen = () => setOpen((prevState) => !prevState);

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

    const ArrowIcon = open ? ArrowUpIcon : ArrowDownIcon;

    console.log(open);

    return (
      <>
        <As
          {...props}
          onClick={children ? handleOpen : undefined}
          className={sideNavigation.classnames.sideNavigation({
            active: active ?? open,
          })}
          disabled={disabled}
          ref={innerRef}
        >
          <Box display="flex" alignItems="center" gap="$3xs">
            {leadingStart && (
              <Icon source={leadingStart} color="$currentColor" />
            )}
            <Box display="flex" flexDirection="column" gap="$4xs">
              <span
                className={sideNavigation.classnames.name({
                  active: active ?? open,
                  disabled,
                })}
              >
                {name}
              </span>
              {description && (
                <span
                  className={sideNavigation.classnames.description({
                    disabled,
                  })}
                >
                  {description}
                </span>
              )}
            </Box>
          </Box>
          <Icon
            source={leadingEnd || <ArrowIcon size="medium" />}
            color="$currentColor"
          />
        </As>
        <div className={sideNavigation.classnames.content({ open })}>
          {children}
        </div>
      </>
    );
  },
) as PolymorphicForwardRefComponent<"button" | "a", _SideNavigationProps> &
  SideNavigationComponents;

SideNavigation.Item = Item;
SideNavigation.Item.displayName = "SideNavigation.Item";
SideNavigation.displayName = "SideNavigation";

export type SideNavigationProps = ComponentPropsWithRef<typeof SideNavigation>;

export { SideNavigation };
export default SideNavigation;
