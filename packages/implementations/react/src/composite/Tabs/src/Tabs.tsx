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
  selectedTab,
  ...props
}: TabsProps) => {
  const [currentTab, setCurrentTab] = useState<number>(preSelectedTab || 0);

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
                selected={currentTab === index}
                onClick={() => {
                  onSelectTab?.(index);
                  setCurrentTab(index);
                }}
                {...rest}
              >
                {label}
              </TabsButton>
            </li>
          );
        })}
      </ul>
      {tabsChildren[selectedTab || currentTab]}
    </>
  );
};

Tabs.Item = TabsItem;
Tabs.displayName = "Tabs";
Tabs.Item.displayName = "Tabs.Item";

export { Tabs };
