import type { Meta, StoryObj } from "@storybook/react";
import { argTypesConvert } from ".storybook/utils";
import { Icon } from "@rarui-react/icon";
import { StorefrontIcon } from "@rarui/icons";

import React from "react";
import { Label } from "./Label";
import docs from "./label.docs.json";

const meta = {
  title: "Atomic/Label",
  component: Label,
  argTypes: {
    ...argTypesConvert(docs),
    children: { control: { disable: true } },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof Label>;

export const basic: Story = {
  args: {
    children: "Label",
  },
};

export const withIcon: Story = {
  args: {
    children: (
      <>
        <Icon source={<StorefrontIcon />} />
        Label
      </>
    ),
  },
};

export const hidden: Story = {
  args: {
    hidden: true,
  },
};
