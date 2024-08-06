import type { Meta, StoryObj } from "@storybook/html";
import { argTypesConvert, storyGenerator } from ".storybook/utils";
import docs from "../../Root/src/root.docs.json";

const itemDocs = docs.subComponents.find(
  (subComponent) => subComponent.name === "Tabs.Item",
);

import "../../../../layout/Box/src/Box";
import "./Item";

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

export const basic: Story = Template.bind({});
basic.args = {
  label: "Label",
};
