import type { Meta, StoryObj } from "@storybook/html";
import { argTypesConvert, storyGenerator } from ".storybook/utils";
import docs from "@rarui/tabs/src/root.docs.json";

import "@rarui/box/src/Box";
import "./Item";

const itemDocs = docs.subComponents.find(
  (subComponent) => subComponent.name === "Tabs.Item",
);

const { argTypes, Template } = storyGenerator(
  "rarui-tabs-item",
  argTypesConvert(itemDocs),
);

const meta = {
  title: "Navegação/Tabs/Item",
  tags: ["autodocs"],
  argTypes,
} satisfies Meta<any>;

export default meta;
type Story = StoryObj<any>;

export const Basic: Story = Template.bind({});
Basic.args = {
  label: "Label",
};
