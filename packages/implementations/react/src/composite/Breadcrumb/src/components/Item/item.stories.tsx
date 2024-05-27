import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Icon } from "@rarui-react/icon";
import { HomeFilledIcon } from "@rarui/icons";

import { Breadcrumb } from "../../Breadcrumb";
import docs from "../../breadcrumb.docs.json";

const footerDocs = docs.subComponents.find(
  (subComponent) => subComponent.name === "Breadcrumb.Item",
);

const meta = {
  title: "Composite/Breadcrumb.Item",
  component: Breadcrumb.Item,
  argTypes: {
    ...argTypesConvert(footerDocs),
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb.Item>;

export default meta;
type Story = StoryObj<typeof Breadcrumb.Item>;

export const basic: Story = {
  args: {
    children: (
      <>
        <Icon color="$primary" source={<HomeFilledIcon size={16} />} /> Home
      </>
    ),
  },
};
