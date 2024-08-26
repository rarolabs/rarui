import React, { Children, useMemo } from "react";
import { breadcrumb } from "@rarui/styles";
import { Dropdown } from "@rarui-react/dropdown";
import { IconButton } from "@rarui-react/icon-button";
import { Box } from "@rarui-react/box";
import { MoreHorizIcon } from "@rarui/icons";

import { BreadcrumbProps, BreadcrumbComponents } from "./breadcrumb.types";
import { BreadcrumbItem, BreadcrumbSeparator } from "./components";

const Breadcrumb: React.FC<BreadcrumbProps> & BreadcrumbComponents = ({
  className: _className,
  style: _style,
  children,
  itensAfterTruncate = 10,
  ...props
}: BreadcrumbProps) => {
  const childrens = useMemo(
    () => Children.map(children, (child) => child) ?? [],
    [children],
  );

  const validLimit = itensAfterTruncate >= 1 ? itensAfterTruncate : 1;
  const additionalVisibleItemsCount = Math.min(
    validLimit,
    childrens.length - 1,
  );
  const hiddenItemsEndIndex = childrens.length - additionalVisibleItemsCount;

  const visibleItems =
    childrens.length > 1 ? childrens.slice(-additionalVisibleItemsCount) : [];

  const hiddenItems = childrens.slice(1, hiddenItemsEndIndex);
  const lastIndex = childrens.length - 2 - hiddenItems.length;

  return (
    <ol {...props} className={breadcrumb.classnames.breadcrumb}>
      {childrens?.[0] && (
        <Box as="li" display="flex" alignItems="center" color="$secondary">
          {childrens?.[0]}
          <BreadcrumbSeparator />
        </Box>
      )}
      {!!hiddenItems.length && (
        <Box as="li" display="flex" alignItems="center" color="$secondary">
          <Dropdown
            data-testid="breadcrumb-truncate"
            content={hiddenItems.map((hiddenItem) => hiddenItem)}
            position="bottom"
          >
            <IconButton
              rounded
              variant="ghost"
              appearance="brand"
              source={<MoreHorizIcon size="medium" />}
            />
          </Dropdown>
          <BreadcrumbSeparator />
        </Box>
      )}
      {visibleItems.map((visibleItem, index: number) => (
        <Box
          key={crypto.randomUUID()}
          as="li"
          display="flex"
          alignItems="center"
          color={index === lastIndex ? "$brand" : "$secondary"}
        >
          {visibleItem}
          {index !== lastIndex && <BreadcrumbSeparator />}
        </Box>
      ))}
      <br />
    </ol>
  );
};

Breadcrumb.Item = BreadcrumbItem;

Breadcrumb.displayName = "Breadcrumb";
Breadcrumb.Item.displayName = "Breadcrumb.Item";

export { Breadcrumb };
