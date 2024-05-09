import React, {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  forwardRef,
  useRef,
} from "react";
import { useRefObjectAsForwardedRef } from "@rarui/typings";
import { input } from "@rarui/styles";
import { SearchIcon } from "@rarui/icons";
import { Icon } from "@rarui-react/icon";

import { Leading } from "../Leading";
import { _SearchProps } from "./search.types";

const Search = forwardRef<HTMLInputElement, _SearchProps>(
  (
    {
      className: _className,
      style: _style,
      size = "medium",
      appearance,
      divider = true,
      ...rest
    }: _SearchProps,
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const dataTestid = (rest as { "data-testid": string })?.["data-testid"];
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
          type="search"
          className={input.classnames.input({ size, divider })}
        />
        <Leading
          data-testid="icon-search"
          position="end"
          onClick={focusInput}
          appearance={appearance}
          size={size}
          divider={divider}
        >
          <Icon color="$currentColor" source={<SearchIcon size={size} />} />
        </Leading>
      </div>
    );
  },
) as ForwardRefExoticComponent<
  _SearchProps &
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> &
    Omit<React.RefAttributes<HTMLInputElement>, "size">
>;

Search.displayName = "Input.Search";

export type SearchProps = ComponentPropsWithRef<typeof Search>;
export { Search };
