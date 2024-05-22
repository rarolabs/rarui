import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";

import { SideNavigation } from "../../SideNavigation";
import docs from "../../sideNavigation.docs.json";

const itemDocs = docs.subComponents.find(
  (subComponent) => subComponent.name === "SideNavigation.Item",
);

const meta = {
  title: "Composite/SideNavigation.Item",
  component: SideNavigation.Item,

  argTypes: {
    ...argTypesConvert(itemDocs),
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SideNavigation.Item>;

export default meta;
type Story = StoryObj<typeof SideNavigation.Item>;

export const basic: Story = {
  args: {
    children: "Title",
  },
};
