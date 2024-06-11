import React from "react";
import { select } from "@rarui/styles";
import { Dropdown } from "@rarui-react/dropdown";
import { SelectProps } from "./select.types";

const Select: React.FC<SelectProps> = ({
  className: _className,
  style: _style,
  children,
  htmlFor,
  hidden,
  ...props
}) => (
  <Dropdown width="100%" matchReferenceWidth content={<>a</>}>
    {<div className={select.classnames.select()}>a</div>}
  </Dropdown>
);

Select.displayName = "Select";

export { Select };
