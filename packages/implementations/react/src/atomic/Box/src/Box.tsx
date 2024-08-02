import React, { ComponentPropsWithRef, forwardRef } from "react";
import { PolymorphicForwardRefComponent } from "@rarui-react/components/src/types";
import { box } from "@rarui/styles";

import { _BoxProps } from "./box.types";

const Box = forwardRef(
  (
    {
      className: _className,
      style: _style,
      as: As = "div",
      boxSizing = "border-box",
      ...rest
    }: _BoxProps & { as: any },
    ref,
  ) => {
    const { className, style, otherProps } = box.sprinkle({
      ...rest,
      boxSizing,
    });

    return <As ref={ref} className={className} style={style} {...otherProps} />;
  },
) as PolymorphicForwardRefComponent<"div", _BoxProps>;

Box.displayName = "Box";

export type BoxProps = ComponentPropsWithRef<typeof Box> & _BoxProps;
export { Box };
