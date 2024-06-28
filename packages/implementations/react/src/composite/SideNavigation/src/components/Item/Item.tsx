import React, {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
} from "react";
import {
  PolymorphicForwardRefComponent,
  useRefObjectAsForwardedRef,
} from "@rarui/typings";
import { sideNavigation } from "@rarui/styles";
import { SideNavigationItemProps } from "./item.types";
import { varsThemeBase } from "../../../../../../../../styles/src/themes";

const SideNavigationItem = forwardRef(
  (
    {
      className: _className,
      style: _styles,
      as: As = "button",
      children,
      active,
      level = 1,
      ...props
    }: SideNavigationItemProps & { as: any },
    ref,
  ) => {
    const innerRef = useRef<HTMLButtonElement>(null);
    useRefObjectAsForwardedRef(ref, innerRef);
    const { className, otherProps, style } = sideNavigation.paddingSprinkle({
      paddingLeft: `calc(${level} * ${varsThemeBase.spacing["2xs"]}`,
    });

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
        className={[
          className,
          sideNavigation.classnames.sideNavigation({ active }),
          sideNavigation.classnames.sideNavigationItem,
        ].join(" ")}
        ref={innerRef}
        style={style}
        {...otherProps}
      >
        {children}
      </As>
    );
  },
) as PolymorphicForwardRefComponent<"button" | "a", SideNavigationItemProps>;

export default SideNavigationItem.displayName = "SideNavigation.Item";
export { SideNavigationItem };
