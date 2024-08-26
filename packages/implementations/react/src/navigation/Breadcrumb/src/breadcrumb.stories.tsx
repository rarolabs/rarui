import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import flattenChildren from "react-keyed-flatten-children";
import { argTypesConvert } from ".storybook/utils";
import { Icon } from "@rarui-react/icon";
import { HomeFilledIcon } from "@rarui/icons";

import docs from "./breadcrumb.docs.json";
import { Breadcrumb } from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "Composite/Breadcrumb",
  component: Breadcrumb,
  render: ({ children, ...args }) => (
    <Breadcrumb {...args}>{flattenChildren(children)}</Breadcrumb>
  ),
  argTypes: argTypesConvert(docs),
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const basic: Story = {
  args: {
    children: (
      <>
        <Breadcrumb.Item as="a" href="https://www.google.com">
          <Icon color="$primary" source={<HomeFilledIcon size={16} />} /> Home
        </Breadcrumb.Item>
        <Breadcrumb.Item as="a" href="https://www.google.com">
          Path
        </Breadcrumb.Item>
        <Breadcrumb.Item as="a" href="https://www.google.com">
          Articles
        </Breadcrumb.Item>
        <Breadcrumb.Item as="a" href="https://www.google.com">
          Blog
        </Breadcrumb.Item>
        <Breadcrumb.Item active as="a" href="https://www.google.com">
          Current Page
        </Breadcrumb.Item>
      </>
    ),
  },
};

export const collapsed: Story = {
  args: {
    itensAfterTruncate: 2,
    children: (
      <>
        <Breadcrumb.Item as="a" href="https://www.google.com">
          <Icon color="$primary" source={<HomeFilledIcon size={16} />} /> Home
        </Breadcrumb.Item>
        <Breadcrumb.Item as="a" href="https://www.google.com">
          Path
        </Breadcrumb.Item>
        <Breadcrumb.Item as="a" href="https://www.google.com">
          Articles
        </Breadcrumb.Item>
        <Breadcrumb.Item as="a" href="https://www.google.com">
          Blog
        </Breadcrumb.Item>
        <Breadcrumb.Item active as="a" href="https://www.google.com">
          Current Page
        </Breadcrumb.Item>
      </>
    ),
  },
};
