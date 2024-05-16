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
import { ItemProps } from "./item.types";

const Item = forwardRef(
  (
    {
      className: _className,
      style: _styles,
      as: As = "button",
      children,
      active,
      ...props
    }: ItemProps & { as: any },
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
          sideNavigation.classnames.sideNavigationItem,
        ].join(" ")}
        ref={innerRef}
      >
        {children}
      </As>
    );
  },
) as PolymorphicForwardRefComponent<"button" | "a", ItemProps>;

export default Item.displayName = "SideNavigation.Item";
export { Item };
