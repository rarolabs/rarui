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

import { Leading } from "../Leading";
import { _PasswordProps } from "./password.types";

const Password = forwardRef<HTMLInputElement, _PasswordProps>(
  (
    {
      className: _className,
      style: _style,
      size = "medium",
      appearance,
      divider = true,
      ...rest
    }: _PasswordProps,
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
        className={input.classnames.container({ appearance })}
      >
        <input
          {...rest}
          ref={inputRef}
          type={show ? "text" : "password"}
          className={input.classnames.input({ size, divider })}
        />
        <Leading
          data-testid="icon-show"
          position="end"
          onClick={() => {
            focusInput();
            handleShow();
          }}
          appearance={appearance}
          size={size}
          divider={divider}
        >
          <Icon
            color="$currentColor"
            source={
              <>
                {show && <EyeOutlinedIcon size="small" />}
                {!show && <EyeOffOutlinedIcon size="small" />}
              </>
            }
          />
        </Leading>
      </div>
    );
  },
) as ForwardRefExoticComponent<
  _PasswordProps &
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> &
    Omit<React.RefAttributes<HTMLInputElement>, "size">
>;

Password.displayName = "Input.Password";

export type PasswordProps = ComponentPropsWithRef<typeof Password>;
export { Password };
