import React, {
  ComponentPropsWithRef,
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
} from "react";
import { button } from "@rarui/styles";
import {
  PolymorphicForwardRefComponent,
  useRefObjectAsForwardedRef,
} from "../../../types";

import { _ButtonProps } from "./button.types";

const Button = forwardRef(
  (
    {
      className: _className,
      style: _style,
      as: As = "button",
      appearance = "brand",
      size = "large",
      variant = "solid",
      full,
      children,
      ...props
    }: _ButtonProps & { as: any },
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
        className={button.classnames.button({
          size,
          variant,
          appearance,
          full,
        })}
        ref={innerRef}
      >
        {children}
      </As>
    );
  },
) as PolymorphicForwardRefComponent<"button" | "a", _ButtonProps>;

Button.displayName = "Button";

export type ButtonProps = ComponentPropsWithRef<typeof Button>;
export { Button };
