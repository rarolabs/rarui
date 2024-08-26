import React from "react";
import { text } from "@rarui/styles";

import { TextProps } from "./text.types";

const Text: React.FC<TextProps> = ({
  className: _className,
  style: _style,
  as: As = "p",
  textAlign = "left",
  fontWeight = "$regular",
  children,
  lineClamp,
  ...rest
}) => {
  const { className, style, otherProps } = text.sprinkle({
    ...rest,
    textAlign,
    fontWeight,
  });

  return (
    <As
      className={[
        className,
        text.classnames.text({ lineClamp: !!lineClamp }),
      ].join(" ")}
      style={{ ...style, WebkitLineClamp: lineClamp }}
      {...otherProps}
    >
      {children}
    </As>
  );
};

Text.displayName = "Text";

export { Text };
