import React, {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  forwardRef,
  useRef,
  useState,
} from "react";
import { useRefObjectAsForwardedRef } from "@rarui/typings";
import { input } from "@rarui/styles";
import { EyeOffOutlinedIcon, EyeOutlinedIcon } from "@rarui/icons";
import { Icon } from "@rarui-react/icon";

import { InputLeading } from "../Leading";
import { _InputPasswordProps } from "./password.types";

const InputPassword = forwardRef<HTMLInputElement, _InputPasswordProps>(
  (
    {
      className: _className,
      style: _style,
      size = "medium",
      divider = true,
      border = true,
      disabled,
      appearance,
      ...rest
    }: _InputPasswordProps,
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const dataTestid = (rest as { "data-testid": string })?.["data-testid"];
    const [show, setShow] = useState(false);
    const handleShow = () => setShow((prevState) => !prevState);
    const focusInput = () => inputRef.current?.focus();
    useRefObjectAsForwardedRef(ref, inputRef);

    return (
      <div
        data-testid={dataTestid ? `${dataTestid}-container` : ""}
        className={input.classnames.container({ appearance, border, size })}
      >
        <input
          {...rest}
          ref={inputRef}
          disabled={disabled}
          type={show ? "text" : "password"}
          className={input.classnames.input({ size, divider })}
        />
        <InputLeading
          data-testid="icon-show"
          position="end"
          onClick={() => {
            focusInput();
            handleShow();
          }}
          appearance={appearance}
          size={size}
          divider={divider}
          disabled={disabled}
        >
          <Icon
            color="$currentColor"
            source={
              <>
                {show && (
                  <EyeOutlinedIcon
                    size={size === "small" ? "small" : "medium"}
                  />
                )}
                {!show && (
                  <EyeOffOutlinedIcon
                    size={size === "small" ? "small" : "medium"}
                  />
                )}
              </>
            }
          />
        </InputLeading>
      </div>
    );
  },
) as ForwardRefExoticComponent<
  _InputPasswordProps &
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> &
    Omit<React.RefAttributes<HTMLInputElement>, "size">
>;

InputPassword.displayName = "Input.Password";

export type InputPasswordProps = ComponentPropsWithRef<typeof InputPassword>;
export { InputPassword };
