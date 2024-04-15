import React, { ComponentPropsWithRef, forwardRef, useRef } from "react";
import { checkbox } from "@rarui/styles";
import { useRefObjectAsForwardedRef } from "@rarui/typings";
import { CheckboxBaseProps } from "./checkbox.types";

const Checkbox = forwardRef<HTMLInputElement, CheckboxBaseProps>(
  (
    {
      className: _className,
      style: _style,
      id,
      label,
      danger,
      disabled,
      size = "medium",
      indeterminate = false,
      ...props
    },
    ref,
  ) => {
    const innerRef = useRef<HTMLInputElement>(null);
    useRefObjectAsForwardedRef(ref, innerRef);

    return (
      <label htmlFor={id} className={checkbox.classnames.label({ danger })}>
        <span className={checkbox.classnames.container}>
          <input
            {...props}
            type="checkbox"
            ref={innerRef}
            id={id}
            className={checkbox.classnames.checkbox({
              danger,
              size,
              indeterminate,
            })}
            disabled={disabled}
          />
          <span className={checkbox.classnames.overlay} />
        </span>
        {label && <span>{label}</span>}
      </label>
    );
  },
);

export type CheckboxProps = ComponentPropsWithRef<typeof Checkbox>;
export { Checkbox };
