import React, {
  ComponentPropsWithRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import {
  PolymorphicForwardRefComponent,
  useRefObjectAsForwardedRef,
} from "@rarui/typings";
import { link } from "@rarui/styles";

import { LinkBaseProps } from "./link.types";

const Link = forwardRef(
  (
    {
      className: _className,
      style: _style,
      as: As = "a",
      size = "large",
      appearance = "default",
      children,
      ...props
    }: LinkBaseProps & { as: any },
    ref,
  ) => {
    const innerRef = useRef<HTMLAnchorElement>(null);
    useRefObjectAsForwardedRef(ref, innerRef);

    useImperativeHandle<
      HTMLAnchorElement | HTMLButtonElement | null,
      HTMLAnchorElement | null
    >(ref, () => innerRef?.current);

    useEffect(() => {
      if (
        innerRef.current &&
        !(innerRef.current instanceof HTMLButtonElement) &&
        !(innerRef.current instanceof HTMLAnchorElement)
      ) {
        console.error(
          "Error: Found `Link` component that renders an inaccessible element",
          innerRef.current,
          "Please ensure `Link` always renders as <a> or <button>",
        );
      }
    }, [innerRef]);

    return (
      <As
        {...(props as any)}
        className={[
          link.classnames.link({ appearance, size }),
          // link.sprinkle({ textDecoration, fontSize, lineHeight }),
        ].join(" ")}
        ref={innerRef}
      >
        {children}
      </As>
    );
  },
) as PolymorphicForwardRefComponent<"a" | "button", LinkBaseProps>;

Link.displayName = "Link";

export type LinkProps = ComponentPropsWithRef<typeof Link>;
export { Link };
