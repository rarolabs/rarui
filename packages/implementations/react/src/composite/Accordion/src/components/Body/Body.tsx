import React, { useMemo } from "react";
// import { accordion } from "@nimbus-ds/styles";

import { BodyProps } from "./body.types";
import { useAccordion, useAccordionItem } from "../../hooks";

const Body: React.FC<BodyProps> = ({
  className: _className,
  style: _style,
  children,
  borderBottom = "none",
  borderTop = "none",
  padding = "base",
  ...rest
}) => {
  const { selected } = useAccordion();
  const { index } = useAccordionItem();

  const isOpen = useMemo(() => selected === index, [selected, index]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      // className={[
      //   accordion.classnames.body,
      //   accordion.sprinkle({ borderBottom, borderTop, padding }),
      // ].join(" ")}
      {...rest}
    >
      {children}
    </div>
  );
};

export { Body };
