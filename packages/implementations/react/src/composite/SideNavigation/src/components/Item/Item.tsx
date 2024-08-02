import React, {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
} from "react";
import {
  PolymorphicForwardRefComponent,
  useRefObjectAsForwardedRef,
} from "@rarui-react/components/src/types";
import { sideNavigation } from "@rarui/styles";
import { SideNavigationItemProps } from "./item.types";

const SideNavigationItem = forwardRef(
  (
    {
      className: _className,
      style: _styles,
      as: As = "button",
      children,
      active,
      level = 0,
      ...props
    }: SideNavigationItemProps & { as: any },
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
        className={[
          sideNavigation.classnames.sideNavigation({ active }),
          sideNavigation.classnames.item({ level }),
        ].join(" ")}
        ref={innerRef}
      >
        {children}
      </As>
    );
  },
) as PolymorphicForwardRefComponent<"button" | "a", SideNavigationItemProps>;

export default SideNavigationItem.displayName = "SideNavigation.Item";
export { SideNavigationItem };
