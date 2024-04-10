import React from "react";
import { title } from "@rarui/styles";

import { TitleProps } from "./title.types";

const Title: React.FC<TitleProps> = ({
  className: _className,
  style: _style,
  as: As = "h1",
  textAlign = "left",
  fontWeight = "$bold",
  children,
  ...rest
}) => {
  const { className, style, otherProps } = title.sprinkle({
    ...(rest as Parameters<typeof title.sprinkle>[0]),
    textAlign,
    fontWeight,
  });

  return (
    <As
      className={[className, title.classnames.title({ as: As })].join(" ")}
      style={style}
      {...otherProps}
    >
      {children}
    </As>
  );
};

Title.displayName = "Title";

export { Title };
