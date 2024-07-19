import React, { ReactElement, useState } from "react";
import { tabs } from "@rarui/styles";
import { TabsComponents, TabsProps } from "./tabs.types";
import { TabsButton, TabsItem, TabsItemProps } from "./components";

const Tabs: React.FC<TabsProps> & TabsComponents = ({
  className: _className,
  style: _style,
  position = "left",
  underlined,
  children,
  preSelectedTab,
  full,
  ...props
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
        className={tabs.classnames.ul({ underlined, position })}
        {...props}
      >
        {tabsChildren.map((tabChildren, index) => {
          const { label, onSelectTab, ...rest } = tabChildren.props;
          return (
            <li
              key={crypto.randomUUID()}
              className={tabs.classnames.li({ full })}
            >
              <TabsButton
                underlined={underlined}
                selected={selectedTab === index}
                onClick={() => {
                  onSelectTab?.(index);
                  setSelectedTab(index);
                }}
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
