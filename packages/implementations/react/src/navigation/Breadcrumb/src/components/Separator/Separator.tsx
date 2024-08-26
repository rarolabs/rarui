import React from "react";
import { ChevronRightIcon } from "@rarui/icons";

import { Icon } from "@rarui-react/icon";

const BreadcrumbSeparator: React.FC = (props) => (
  <Icon {...props} color="$secondary" source={<ChevronRightIcon size={16} />} />
);

BreadcrumbSeparator.displayName = "Breadcrumb.Separator";
export { BreadcrumbSeparator };
