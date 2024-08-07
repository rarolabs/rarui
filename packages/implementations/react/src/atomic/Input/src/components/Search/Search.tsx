import React, {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  forwardRef,
  useRef,
} from "react";
import { useRefObjectAsForwardedRef } from "../../../../../types";
import { input } from "@rarui/styles";
import { SearchIcon } from "@rarui/icons";
import { Icon } from "@rarui-react/icon";

import { InputLeading } from "../Leading";
import { _InputSearchProps } from "./search.types";

const InputSearch = forwardRef<HTMLInputElement, _InputSearchProps>(
  (
    {
      className: _className,
      style: _style,
      size = "medium",
      border = true,
      divider = true,
      disabled,
      appearance,
      ...rest
    }: _InputSearchProps,
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
        <input
          {...rest}
          ref={inputRef}
          disabled={disabled}
          type="search"
          className={input.classnames.input({ size, divider })}
        />
        <InputLeading
          data-testid="icon-search"
          position="end"
          onClick={focusInput}
          appearance={appearance}
          size={size}
          divider={divider}
          disabled={disabled}
        >
          <Icon
            color="$currentColor"
            source={<SearchIcon size={size === "small" ? "small" : "medium"} />}
          />
        </InputLeading>
      </div>
    );
  },
) as ForwardRefExoticComponent<
  _InputSearchProps &
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> &
    Omit<React.RefAttributes<HTMLInputElement>, "size">
>;

InputSearch.displayName = "Input.Search";

export type InputSearchProps = ComponentPropsWithRef<typeof InputSearch>;
export { InputSearch };
