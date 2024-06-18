import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { SentimentSatisfiedOutlinedIcon } from "@rarui/icons";
import { Icon } from "@rarui-react/icon";

import { Tabs } from "../../Tabs";
import { TabsButton } from "../../components";
import docs from "../../tabs.docs.json";

const itemDocs = docs.subComponents.find(
  (subComponent) => subComponent.name === "Tabs.Item",
);

TabsButton.displayName = "Tabs.Item";

const meta: Meta<typeof Tabs.Item> = {
  title: "Composite/Tabs/Item",
  component: Tabs.Item,
  render: ({ label, ...rest }) => <TabsButton {...rest}>{label}</TabsButton>,
  argTypes: {
    ...argTypesConvert(itemDocs),
    children: { control: { disable: true } },
    label: { control: { disable: true } },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs.Item>;

export const basic: Story = {
  args: {
    label: "item",
  },
};

export const customLabel: Story = {
  args: {
    label: (
      <>
        <Icon source={<SentimentSatisfiedOutlinedIcon size="medium" />} />
        Label
      </>
    ),
  },
};
