import React, { ReactElement, useState } from "react";
import { tabs } from "@rarui/styles";
import { TabsComponents, TabsProps } from "./tabs.types";
import { TabsButton, TabsItem, TabsItemProps } from "./components";

const Tabs: React.FC<TabsProps> & TabsComponents = ({
  className: _className,
  style: _style,
  underlined,
  children,
  preSelectedTab,
  full,
  ...rest
}: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState<number>(preSelectedTab || 0);

  const tabsChildren = React.Children.toArray(children).filter(
    (child): child is ReactElement<TabsItemProps> =>
      React.isValidElement(child) && child.type === TabsItem,
  );

  return (
    <>
      <ul
        role="tablist"
        className={tabs.classnames.ul({ underlined })}
        {...rest}
      >
        {tabsChildren.map((tabChildren, index) => {
          const { label, ...rest } = tabChildren.props;
          return (
            <li
              key={crypto.randomUUID()}
              className={tabs.classnames.li({ full })}
              aria-selected={selectedTab === index}
            >
              <TabsButton
                underlined={underlined}
                selected={selectedTab === index}
                onClick={() => setSelectedTab(index)}
                {...rest}
              >
                {label}
              </TabsButton>
            </li>
          );
        })}
      </ul>
      {tabsChildren[selectedTab]}
    </>
  );
};

Tabs.Item = TabsItem;
Tabs.displayName = "Tabs";
Tabs.Item.displayName = "Tabs.Item";

export { Tabs };
