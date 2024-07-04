import React from "react";
import { textarea } from "@rarui/styles";

import { TextareaProps } from "./textarea.types";

const Textarea: React.FC<TextareaProps> = ({
  className: _className,
  style: _style,
  lines = 2,
  appearance,
  ...rest
}) => (
  <textarea
    className={textarea.classnames.textarea({ appearance })}
    rows={lines}
    {...rest}
  />
);

Textarea.displayName = "Textarea";

export { Textarea };
export default Textarea;
