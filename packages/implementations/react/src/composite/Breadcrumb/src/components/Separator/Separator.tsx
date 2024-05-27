import React from "react";
import { ChevronRightIcon } from "@rarui/icons";

import { Icon } from "@rarui-react/icon";

const Separator: React.FC = (props) => (
  <Icon {...props} color="$secondary" source={<ChevronRightIcon size={16} />} />
);

Separator.displayName = "Breadcrumb.Separator";
export { Separator };
