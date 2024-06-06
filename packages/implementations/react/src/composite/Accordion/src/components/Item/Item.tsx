import React, { useMemo } from "react";

import { ManagerItem } from "../../contexts";
import { ItemProps } from "./item.types";

const Item: React.FC<ItemProps> = ({ children, index, testId }) => {
  const context = useMemo(() => ({ index, testId }), [index, testId]);
  return (
    <ManagerItem.Provider value={context}>{children}</ManagerItem.Provider>
  );
};

export { Item };
