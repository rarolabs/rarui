import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { FolderOutlinedIcon } from "@rarui/icons";
import { SideNavigation } from "./SideNavigation";
import docs from "./sideNavigation.docs.json";

const meta = {
  title: "Composite/SideNavigation",
  component: SideNavigation,

  argTypes: {
    ...argTypesConvert(docs),
    children: { control: { disable: true } },
    leadingStart: { control: { disable: true } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SideNavigation>;

export default meta;
type Story = StoryObj<typeof SideNavigation>;

export const basic: Story = {
  args: {
    name: "Title",
    description: "Description",
    leadingStart: <FolderOutlinedIcon size="medium" />,
    children: (
      <>
        <SideNavigation.Item>About</SideNavigation.Item>
        <SideNavigation.Item active as="a" href="/">
          Link
        </SideNavigation.Item>
      </>
    ),
  },
};
