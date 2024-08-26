import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { BookmarkOutlinedIcon } from "@rarui/icons";

import { Accordion } from "../../Accordion";
import docs from "../../accordion.docs.json";

const headerDocs = docs.subComponents.find(
  (subComponent) => subComponent.name === "Accordion.Header",
);

const meta: Meta<typeof Accordion.Header> = {
  title: "Composite/Accordion/Header",
  component: Accordion.Header,
  render: (args) => (
    <Accordion>
      <Accordion.Item index="0">
        <Accordion.Header {...args} />
      </Accordion.Item>
    </Accordion>
  ),
  argTypes: {
    ...argTypesConvert(headerDocs),
    icon: { control: { disable: true } },
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Accordion.Header>;

export const basic: Story = {
  args: {
    title: "Title one",
    icon: <BookmarkOutlinedIcon size="medium" />,
  },
};
