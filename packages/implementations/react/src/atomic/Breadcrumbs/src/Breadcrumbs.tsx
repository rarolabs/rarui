import React, { useState } from "react";
import { breadcrumbs } from "@rarui/styles";
import { Icon } from "@rarui-react/icon";
import { ChevronRightIcon, MoreHorizIcon } from "@rarui/icons";
import {
  BreadcrumbSeparatorType,
  BreadcrumbsItems,
  BreadcrumbsProps,
} from "./breadcrumbs.types";

const BreadcrumbItem = ({ item }: { item: BreadcrumbsItems }) => (
  <li
    key={item.id}
    className={breadcrumbs.classnames.styles.breadcrumbsWrapper}
  >
    <a
      className={breadcrumbs.classnames.styles.breadcrumbsTitle}
      href={item.href}
    >
      {item.title}
    </a>
  </li>
);

const BreadcrumbSeparator: React.FC<BreadcrumbSeparatorType> = ({
  index = "",
}) => (
  <li
    aria-hidden
    key={index ? `${index}-separator` : "separator"}
    data-testid="breadcrumb-separator"
  >
    <Icon color="$secondary" source={<ChevronRightIcon size={16} />} />
  </li>
);

const BreadcrumbTruncate = ({ handleClick }: { handleClick: () => void }) => (
  <li
    aria-hidden
    onClick={handleClick}
    className={breadcrumbs.classnames.styles.breadcrumbsTruncate}
    data-testid="breadcrumb-truncate"
  >
    <Icon source={<MoreHorizIcon color="inherit" size={24} />} />
  </li>
);

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  className: _className,
  style: _style,
  itens,
  itensAfterTruncate = 1,
  maxItens = 10,
  ...props
}) => {
  const [expanded, setExpanded] = useState(false);
  const lastIndex = itens.length - 1;

  const handleClick = () => {
    setExpanded(true);
  };

  const renderItems = itens.map((item: BreadcrumbsItems, index: any) => (
    <>
      <BreadcrumbItem item={item} />
      {index !== lastIndex && <BreadcrumbSeparator index={index} />}
    </>
  ));

  const renderTruncate = () => [
    ...renderItems.slice(0, 1),
    <>
      <BreadcrumbTruncate handleClick={handleClick} key="truncate" />
      <BreadcrumbSeparator key="separator" />
    </>,
    ...renderItems.slice(itens.length - itensAfterTruncate, itens.length),
  ];

  return (
    <nav {...props}>
      <ol className={breadcrumbs.classnames.styles.breadcrumbsList}>
        {maxItens < itens.length && !expanded ? renderTruncate() : renderItems}
      </ol>
    </nav>
  );
};

Breadcrumbs.displayName = "Breadcrumbs";
BreadcrumbItem.displayName = "BreadcrumbItem";
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
BreadcrumbTruncate.displayName = "BreadcrumbTruncate";

export { Breadcrumbs };
