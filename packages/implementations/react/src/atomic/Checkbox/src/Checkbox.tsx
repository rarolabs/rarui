import React, { forwardRef } from "react";
import { checkbox } from "@rarui/styles";
import { CheckboxProps } from "./checkbox.types";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
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
    return (
      <label htmlFor={id} className={checkbox.classnames.label({ danger })}>
        <span className={checkbox.classnames.container}>
          <input
            {...props}
            type="checkbox"
            ref={ref}
            id={id}
            className={checkbox.classnames.checkbox({
              danger,
              //@ts-ignore
              size,
              indeterminate,
            })}
            disabled={disabled}
          />
          <span className={checkbox.classnames.overlay}></span>
        </span>
        {label && <span>{label}</span>}
      </label>
    );
  },
);

export { Checkbox };
