import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { StorefrontIcon } from "@rarui/icons";

import { Accordion } from "../../Accordion";

const meta: Meta<typeof Accordion.Header> = {
  title: "Composite/Accordion.Header",
  component: Accordion.Header,
  render: (args) => (
    <Accordion>
      <Accordion.Item index="0">
        <Accordion.Header {...args} />
      </Accordion.Item>
    </Accordion>
  ),
  argTypes: {
    icon: { control: { disable: true } },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion.Header>;

export const basic: Story = {
  args: {
    title: "Title one",
    subtitle: "Caption one",
    icon: <StorefrontIcon size="medium" />,
  },
};
