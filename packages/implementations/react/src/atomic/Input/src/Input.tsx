import React, {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  forwardRef,
  useRef,
} from "react";
import { input } from "@rarui/styles";
import { useRefObjectAsForwardedRef } from "@rarui-react/components/src/types";

import { InputLeading, InputPassword, InputSearch } from "./components";
import { _InputProps, InputComponents } from "./input.types";

const Input = forwardRef<HTMLInputElement, _InputProps>(
  (
    {
      className: _className,
      style: _style,
      size = "medium",
      divider = true,
      border = true,
      disabled,
      appearance,
      leadingStart,
      leadingEnd,
      ...rest
    }: _InputProps,
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const dataTestid = (rest as { "data-testid": string })?.["data-testid"];
    const focusInput = () => inputRef.current?.focus();
    useRefObjectAsForwardedRef(ref, inputRef);

    return (
      <div
        data-testid={dataTestid ? `${dataTestid}-container` : ""}
        className={input.classnames.container({ appearance, border, size })}
      >
        {leadingStart && (
          <InputLeading
            data-testid={dataTestid ? `${dataTestid}-leading-start` : ""}
            position="start"
            onClick={focusInput}
            appearance={appearance}
            size={size}
            divider={divider}
            disabled={disabled}
          >
            {leadingStart}
          </InputLeading>
        )}
        <input
          {...rest}
          disabled={disabled}
          ref={inputRef}
          className={input.classnames.input({ size })}
        />
        {leadingEnd && (
          <InputLeading
            data-testid={dataTestid ? `${dataTestid}-leading-end` : ""}
            position="end"
            onClick={focusInput}
            appearance={appearance}
            size={size}
            divider={divider}
            disabled={disabled}
          >
            {leadingEnd}
          </InputLeading>
        )}
      </div>
    );
  },
) as ForwardRefExoticComponent<
  _InputProps &
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> &
    Omit<React.RefAttributes<HTMLInputElement>, "size">
> &
  InputComponents;

Input.Leading = InputLeading;
Input.Password = InputPassword;
Input.Search = InputSearch;
Input.displayName = "Input";
Input.Leading.displayName = "Input.Leading";
Input.Password.displayName = "Input.Password";
Input.Search.displayName = "Input.Search";

export type InputProps = ComponentPropsWithRef<typeof Input>;
export { Input };
