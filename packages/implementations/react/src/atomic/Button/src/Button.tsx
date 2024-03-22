import React, {
  ComponentPropsWithRef,
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
} from "react";
import {
  PolymorphicForwardRefComponent,
  useRefObjectAsForwardedRef,
} from "@rarui/typings";
import { button } from "@rarui/styles";

import { ButtonBaseProps } from "./button.types";

const Button = forwardRef(
  (
    {
      className: _className,
      style: _style,
      as: As = "button",
      appearance = "brand",
      size = "large",
      variant = "solid",
      children,
      ...props
    }: ButtonBaseProps & { as: any },
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
        {...(props as any)}
        className={button.classnames.button({ size, variant, appearance })}
        ref={innerRef}
      >
        {children}
        <span className={button.classnames.overlay} />
      </As>
    );
  },
) as PolymorphicForwardRefComponent<"button" | "a", ButtonBaseProps>;

Button.displayName = "Button";

export type ButtonProps = ComponentPropsWithRef<typeof Button>;
export { Button };